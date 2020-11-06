const Mongo = require("./keede mongo adapter copy");
const Rest = require("./local json adapter");
const Array = require("./array adapter");

class Adapter {
  constructor(type) {
    type = type.toLowerCase();
    if (type === "array") {
      this.obj = new Array.ArrayAdapter();
      console.log("Array adapter created");
    } else if (type === "mongo") {
      this.obj = new Mongo.MongoAdapter();
      console.log("Mongodb adapter created");
    } else if (type === "rest") {
      this.obj = new Rest.RestAdapter();
      console.log("Rest adapter created");
    }
  }

  get(query_id) {
    this.obj.get(query_id);
  }

  getAll() {
    this.obj.getAll();
  }

  post(query_obj) {
    this.obj.post(query_obj);
  }

  put(query_id, query_obj) {
    this.obj.put(query_id, query_obj);
  }

  patch(query_id, query_obj) {
    this.patch(query_id, query_obj);
  }

  del(query_id) {
    this.del(query_id);
  }
}

adp = new Adapter("Array");
