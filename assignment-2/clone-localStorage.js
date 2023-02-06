class LocalStorage {
  constructor() {
    this.store = new Map();
  }

  setItem(key, value) {
    if (typeof value == "string") {
      this.store.set(key, value);
    }else{
      console.log(`Not a string`);
    }
  }

  getItem(key) {
    if ((this.store).has(key)) {
      return this.store.get(key);
    }else{
      console.log(`Key not present`);
    }
  }

  removeItem(key) {
    if ((this.store).has(key)) {
      this.store.delete(key); 
    }else{
      console.log(`key not present`);
    }
  }

  clear() {
    if (this.store.size) {
      this.store.clear();
    }else{
      console.log(`LocalSotrage already empty`);
    }
  }

  get length() {
    return this.store.size;
  }
}

const localStorage = new LocalStorage();

localStorage.setItem(1,"sadisadh");

