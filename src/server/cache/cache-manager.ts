import { ObjectId } from 'bson';
import { Dto } from '../db/dto/dto';

export class CacheManager<T extends Dto> {
    private map: Map<string, T> = new Map();
    private indexer: string[] = [];

    constructor(public maxCount: number) {
    }

    putAll(elements: T[]) {
        elements.forEach(element => {
            this.put(element);
        });
    }

    put(element: T) {
        const indexer = this.indexer.slice();
        const map = new Map(this.map);
        indexer.push(element._id?.toHexString());
        map.set(element._id?.toHexString(), element);
        while (indexer.length > this.maxCount) {
            const key = indexer.shift();
            if (key !== undefined) { map.delete(key); } else { return; }
        }
    }

    get(key: ObjectId): T | null | undefined {
        let indexer = this.indexer.slice();
        const map = new Map(this.map);
        const index = this.indexOf(key);
        if (index < 0) { return null; }
        if (map.has(key.toHexString())) {
            const element = map.get(key.toHexString());
            if (element === undefined) {
                this.indexer = indexer.splice(index);
                return null;
            } else {
                indexer = indexer.splice(index);
                indexer.push(element._id?.toHexString());
                return element;
            }
        }
        this.indexer = indexer.splice(index);
        return null;
    }

    private indexOf(key: ObjectId): number {
        const indexer = this.indexer.slice();
        const map = new Map(this.map);
        for (let i = 0; i < indexer.length; i++) {
            const element = indexer[i];
            if (element === key.toHexString()) {
                if (map.has(key.toHexString())) { return i; }
                this.indexer = indexer.splice(i);
                return -1;
            }
        }
        return -1;
    }

    isExist(key: ObjectId): Boolean {
        return this.indexOf(key) >= 0;
    }

}
