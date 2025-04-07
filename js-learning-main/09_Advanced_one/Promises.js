//creation of promises...
const promise1 = new Promise(function (resolve, reject) {
  //do an async task
  //DB calls,network calls,cryptography.
  setTimeout(function () {
    //console.log("Async task complete");
    resolve();
  }, 1000);
});
promise1.then(function () {
  //console.log("Promise consumed");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //console.log("Async task 2 completed");
    resolve({ username: "Pratyush", email: "abc@example.com" });
  }, 1000);
});
promise3.then(function (user) {
  //console.log(user);
});

//Error handling....

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Akansha", Password: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2000);
});
promise4
  .then((user) => {
    //console.log(user);
    return user.username;
  })
  .then((username) => {
    //console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //console.log("The promise is either resolved or rejected...");
  });

//Another method.....
/*
const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Akansha", Password: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();
*/

//Getting a json response....

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    //console.log(data);
  } catch (error) {
    //console.log(error);
  }
}

//getAllUsers();

//getting response using fetch and then(),catch(),finally()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Data fetched above...");
  });
