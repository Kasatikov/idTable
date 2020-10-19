class HashTable {
    constructor(options) {
        this._limit = options.limit || 8;
        this._storage = new Array(this._limit);
        this._count = 0;
    }

    insert(k, v) {
        const index = this.hashString(k, this._limit);
        let bucket = this._storage[index];
        if (!bucket) {
            bucket = [];
            this._storage[index] = bucket;
        }

        let found = false;

        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === k) {
                bucket[i][1] = v;
                found = true;
                break;
            }
        }

        if (!found) {
            bucket.push([k, v]);
            this._count++;
            if (this._count / this._limit > 0.75) {
                this._resize(this._limit * 2);
            }
        }
    }

    getItemIndex(k) {
        const index = this.hashString(k, this._limit);
        const bucket = this._storage[index];

        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === k) {
                    return index;
                }
            }
        } else {
            return null;
        }
    }

    _resize(limit) {
        const oldStorage = this._storage;

        this._limit = limit;
        this._storage = new Array(this._limit);
        this._count = 0;

        for (var i = 0; i < oldStorage.length; i++) {
            const bucket = oldStorage[i];
            if (bucket) {
                for (var j = 0; j < bucket.length; j++) {
                    this.insert(bucket[j][0], bucket[j][1]);
                }
            }
        }
    }

     // https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
    hashString(str, max) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = (hash << 5) + hash + str.charCodeAt(i);
            hash = hash & hash;
            hash = Math.abs(hash);
        }
        return hash % max;
    }
}

(function () {
    window.HashTable = HashTable;
})();

var hashTable = new HashTable({limit: 8});
window.hashTable = hashTable;