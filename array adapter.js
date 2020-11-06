const { getMaxListeners } = require("process");

class ArrayAdapter {
  constructor() {
    this.arr = [];
  }

  get(query_id) {
    let result = this.arr.find((obj) => obj.id == query_id);
    console.log(result);
  }

  getAll() {
    console.log(this.arr);
  }

  post(query_obj) {
    this.arr.push(query_obj);
    console.log();
  }

  patch(query_id, query_obj) {
    let obj = this.arr.find((obj, i) => {
      if (obj.id === query_id) {
        for (let prop in query_obj) {
          this.arr[i][prop] = query_obj[prop];
        }
        return true; // stop searching
      }
    });
  }

  put(query_id, query_obj) {
    this.arr.find((obj, i) => {
      if (obj.id === query_id) {
        this.arr[i] = query_obj;
        return true; // stop searching
      }
    });
  }

  del(query_id) {
    this.arr.find((obj, i) => {
      if (obj.id === query_id) {
        this.arr.splice(i, 1);
        return true;
      }
    });
  }
}

// adp = new ArrayAdapter();
// adp.post({ id: 1, fn: "amit yadav", email: "amit@gmail.com" });
// adp.post({ id: 2, fn: "neha yadav", email: "neha@gmail.com" });
// adp.getAll();
// adp.patch(1, { fn: "rajnikant", email: "don@gmail.com" });
// adp.getAll();
// adp.put(1, { id: 1, fn: "rajnikant", email: "don@gmail.com" });
// adp.getAll();
// adp.del(1);
// adp.getAll();
// adp.get(2);

module.exports.ArrayAdapter = ArrayAdapter;
