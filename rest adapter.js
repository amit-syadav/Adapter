const axios = require("axios");
const { get } = require("http");
// const prompt = require("prompt-sync")({ sigint: true });

class RestAdapter {
  constructor() {}
  get(query_id) {
    axios
      .get(`http://localhost:3000/employees/${query_id}`, {})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getAll() {
    axios
      .get("http://localhost:3000/employees", {})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  post(query_obj) {
    axios
      .post("http://localhost:3000/employees", {
        ...query_obj,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  put(query_id, query_obj) {
    axios
      .put(`http://localhost:3000/employees/${query_id}`, {
        ...query_obj,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  patch(query_id, query_obj) {
    axios
      .patch(`http://localhost:3000/employees/${query_id}`, {
        query_obj,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  del(query_id) {
    axios
      .delete(`http://localhost:3000/employees/${query_id}`, {})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
// const getOne = (id) => {
//   axios
//     .get(`http://localhost:3000/employees/${id}`, {})
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// getOne(2);

// const getAll = () => {
//   axios
//     .get("http://localhost:3000/employees", {})
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// getAll();

// const post = () => {
//   axios
//     .post("http://localhost:3000/employees", {
//       first_name: "lolly",
//       last_name: "polly",
//       email: "lolly@gmail.com",
//     })
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// post();

// put is used to update an already existing entry, id must be existing
// const put = (id, fn, ln) => {
//   axios
//     .put(`http://localhost:3000/employees/${id}`, {
//       first_name: fn,
//       last_name: ln,
//       // email: em,
//     })
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// put(5, "narendra", "modi");

// const patch = (id) => {
//   axios
//     .patch(`http://localhost:3000/employees/${id}`, {
//       email: "pathed@gmail.com",
//     })
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// patch(6);

// const del = (id) => {
//   axios
//     .delete(`http://localhost:3000/employees/${id}`, {})
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// del(2);

// adp = new RestAdapter();
// adp.get(3);
// adp.getAll();
// // adp.post("bahu", "bali", "findmeifucan@gmail.com");
// adp.post({
//   id: 1,
//   first_name: "keval",
//   last_name: "shah",
//   email: "keval@gamil.com",
// });
// adp.getAll();
// adp.put(3, { first_name: "shree ram" });
// adp.del(3);

module.exports.RestAdapter = RestAdapter;
