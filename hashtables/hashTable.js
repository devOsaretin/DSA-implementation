class HashTable {
  constructor() {
    this.size = 20;
    this.bucket = new Array(this.size);
    for (let i = 0; i < this.bucket.length; i++) {
      this.bucket[i] = new Map();
    }
  }
  _hash(key, size) {
    let hashKey = 0;
    for (let char in key) {
      hashKey += key.charCodeAt(char);
    }
    return hashKey % size;
  }

  set(key, value) {
    let index = this._hash(key, this.size);
    this.bucket[index].set(key, value);
  }
  get(key) {
    let index = this._hash(key, this.size);
    return this.bucket[index].get(key);
  }
  remove(key) {
    let index = this._hash(key, this.size);
    return this.bucket[index].delete(key);
  }
  contains(key) {
    let index = this._hash(key, this.size);
    return this.bucket[index].has(key);
  }
}

const hashTable = new HashTable();
hashTable.set("pink", "#effed03");
hashTable.set("myEmail", "igbinobaroosaretin@gmail.com");
hashTable.set("Orange", "#hfy6h4h");
hashTable.set("blue", "#hnnH**8r");
hashTable.remove("blue");
hashTable.set("Blue", "#BLUEHEX");

console.log(hashTable.contains("Blue"));
