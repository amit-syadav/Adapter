const axios = require("axios");
const prompt = require("prompt-sync")({ sigint: true });

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getAll = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=2", {
      timeout: 5000,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getOne = (id) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id} `, { timeout: 5000 })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const post = (id, tt, c) => {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      userId: Number(id),
      title: tt,
      completed: Boolean(c),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};

const put = (id) => {
  axios
    .patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      userId: 3,
      title: "Updated Todo",
      completed: true,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};

const del = (id) => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => console.log(`${res.status} ${res.statusText}`))
    .catch((err) => console.error(err));
};

console.log("Running get all\n");
getAll();

readline.question("Enter id number to fetch\n", (id) => {
  getOne(Number(id));
  readline.pause();
});

readline.question(
  "Enter id, title, complete(true/false)  to post\n",
  (id, title, complete) => {
    post(id, title, complete);
  }
);

readline.question("Enter id number to put/patch\n", (id) => {
  put(Number(id));
});

readline.question("Enter id number to delete\n", (id) => {
  del(Number(id));
  readline.close();
});

// let id = prompt("Enter id number to fetch\n");
// // getOne(Number(id));

// id = prompt("Enter id number to put/patch\n");

// id = prompt("Enter id number to delete\n");
// del(Number(id));
