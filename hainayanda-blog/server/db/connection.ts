import { MongoClient, Db, Collection, MongoCallback, MongoError, ObjectId } from "mongodb";
import { Dto } from "./dto/dto";

const url = "mongodb+srv://client:nQqWqTZEk9I8vNBs@hainayanda-blog-cluster-emnzb.gcp.mongodb.net/test?retryWrites=true"
var client: MongoClient
var connected: Boolean = false
var dbName = "hainayanda"

MongoClient.connect(url, (err, c) => {
    client = c
    c.db
    connected = true
})

export interface IDbCollection<T extends Dto> {
    getAll(callback: MongoCallback<T[]>): void
    getById(id: string, callback: MongoCallback<T|null>): void
    getByUniqueFieldName<V>(fieldName: string, fieldValue: V, callback: MongoCallback<T|null>): void
}

export class DbCollection<T extends Dto> implements IDbCollection<T> {

    private db?: Db
    private collection?: Collection<T>

    constructor(public collectionName: string){
        if(client != null)
            this.db = client.db(dbName)
    }

    private getDb() : Db {
        return this.db!
    }

    private getCollection(): Collection<T> {
        if(this.collection != null) return this.collection
        let collection = this.getDb().collection<T>(this.collectionName)
        this.collection = collection
        return collection
    }

    private tryToConnect(): Boolean {
        if(client != null)
            this.db = client.db(dbName)
        return this.db != null
    }

    getAll(callback: MongoCallback<T[]>) {
        if(!this.tryToConnect()){
            callback(new MongoError("failed to connect"), [])
            return
        }
        let collection = this.getCollection()
        collection.find({}).toArray(callback)
    }

    getById(id: string, callback: MongoCallback<T|null>) {
        if(!this.tryToConnect()){
            callback(new MongoError("failed to connect"), null)
            return
        }
        let collection = this.getCollection()
        collection.findOne({'_id': new ObjectId(id)}, callback)
    }

    getByUniqueFieldName<V>(fieldName: string, fieldValue: V, callback: MongoCallback<T | null>): void {
        if(!this.tryToConnect()){
            callback(new MongoError("failed to connect"), null)
            return
        }
        let collection = this.getCollection()
        collection.findOne({fieldName : fieldValue}, callback)
    }
}