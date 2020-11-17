import { MongoClient, Db, Collection, MongoCallback, MongoError, ObjectId, FilterQuery } from 'mongodb';
import { Dto } from './dto/dto';
import { CacheManager } from '../cache/cache-manager';

const url = 'mongodb+srv://client:nQqWqTZEk9I8vNBs@hainayanda-blog-cluster-emnzb.gcp.mongodb.net/hainayanda?retryWrites=true';
let client: MongoClient;
let connected: Boolean = false;
const dbName = 'hainayanda';

MongoClient.connect(url, (_, c) => {
    client = c;
    connected = true;
});

export interface IDbCollection<T extends Dto> {
    getAll(callback: MongoCallback<T[]>): void;
    getById(id: string, callback: MongoCallback<T | null>): void;
    getOneByFilterQuery(query: FilterQuery<T>, callback: MongoCallback<T | null>): void;
    getByFilterQuery(query: FilterQuery<T>, callback: MongoCallback<T[]>): void;
}

export class DbCollection<T extends Dto> implements IDbCollection<T> {

    private cache: CacheManager<T> = new CacheManager(100);
    private db?: Db;
    private collection?: Collection<T>;

    constructor(public collectionName: string) {
        if (client != null) {
            this.db = client.db(dbName);
        }
    }

    private getDb(): Db {
        return this.db;
    }

    private getCollection(): Collection<T> {
        if (this.collection != null) { return this.collection; }
        const collection = this.getDb().collection<T>(this.collectionName);
        this.collection = collection;
        return collection;
    }

    private tryToConnect(): Boolean {
        if (client != null) {
            this.db = client.db(dbName);
        }
        return this.db != null;
    }

    getAll(callback: MongoCallback<T[]>) {
        if (!this.tryToConnect()) {
            callback(new MongoError('failed to connect'), []);
            return;
        }
        const collection = this.getCollection();
        collection.find({}).toArray((err, res) => {
            if (res != null) { this.cache.putAll(res); }
            callback(err, res);
        });
    }

    getById(id: string, callback: MongoCallback<T | null>) {
        if (!this.tryToConnect()) {
            callback(new MongoError('failed to connect'), null);
            return;
        }
        const objId = new ObjectId(id);
        const fromCache = this.cache.get(objId);
        if (fromCache != null && fromCache !== undefined) {
            callback(new MongoError(''), fromCache);
            return;
        }
        const collection = this.getCollection();
        collection.findOne({ '_id': objId } as FilterQuery<T>, (err, res) => {
            if (res != null) { this.cache.put(res); }
            callback(err, res);
        });
    }

    getOneByFilterQuery(query: FilterQuery<T>, callback: MongoCallback<T | null>): void {
        if (!this.tryToConnect()) {
            callback(new MongoError('failed to connect'), null);
            return;
        }
        const collection = this.getCollection();
        collection.findOne(query, (err, res) => {
            if (res != null) { this.cache.put(res); }
            callback(err, res);
        });
    }
    getByFilterQuery(query: FilterQuery<T>, callback: MongoCallback<T[]>): void {
        if (!this.tryToConnect()) {
            callback(new MongoError('failed to connect'), []);
            return;
        }
        const collection = this.getCollection();
        collection.find(query).toArray((err, res) => {
            if (res != null) { this.cache.putAll(res); }
            callback(err, res);
        });
    }
}
