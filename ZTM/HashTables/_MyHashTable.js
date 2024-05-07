class MyHashTable {
  constructor(size) {
      this.data = new Array(size);
  }

  // hash function
  _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
  }

  // set 
  set(key, value) {
      const address = this._hash(key);

      // Check if the bucket is empty, if
      if (!this.data[address]) {
          this.data[address] = [];
      }

      let index = this._search(key);
      if (index !== -1) {
          // The element already exists in the table, replace it
          this.data[address][index] = [key, value]
      } else {
          // Collision Resolution - Linear Probing
          this.data[address].push([key, value]);
      }

      return this.data;
  }

  get(key) {
      const address = this._hash(key);
      const bucket = this.data[address];
      if (bucket) {
          for (const [key1, value] of bucket) {
              if (key1 === key) {
                  return value;
              }
          }
      }
      return undefined;
  }

  _search(key) {
      const address = this._hash(key);
      const bucket = this.data[address];
      if (bucket) {
          for (let i = 0; i < bucket.length; i++) {
              const [key1] = bucket[i];
              if (key1 === key) {
                  return i;
              }
          }
      }
      return -1;
  }

  // downside 
  keys() {
      if (!this.data.length) {
          return;
      }

      let result = [];
      // loop through all the elements
      for (const bucket of this.data) {
          if (bucket) {
              if (bucket.length > 1) {
                    // but also loop through all the potential collisions
                  for (const [key] of bucket) {
                      result.push(key);
                  }
              } else {
                  result.push(bucket[0][0])
              }
          }
      }
      return result;
  }

}

const myHashTable = new MyHashTable(2);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.get('grapes'));

console.log(myHashTable.set('apples', 9));
console.log(myHashTable.get('apples'));

console.log(myHashTable.set('grapes', 5000));
console.log(myHashTable.get('grapes'));

console.log(myHashTable.set('oranges', 1000));
console.log(myHashTable.get('grapes'));

console.log(myHashTable.keys())

