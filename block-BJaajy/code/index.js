/* 

Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value.
Using `Promise.all` log the value of each promise that it resolved with.

*/

const first = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(1);
  }, 1000)
);

const second = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(2);
  }, 2000)
);

const third = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(3);
  }, 3000)
);

const fourth = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(4);
  }, 4000)
);

Promise.all([first, second, third, fourth]).then((response) =>
  console.log(response)
);

/* 

Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. 
Log the number of followers of each user.

*/

const usernames = ["mojombo", "defunkt", "pjhyett", "wycats", "ezmobius"];

let userData = usernames.map((user) =>
  fetch(`https://api.github.com/users/${user}`).then((res) => res.json())
);

Promise.all(userData).then((res) => {
  for (let user of res) {
    console.log(`Followers Count of ${user.name} is ${user.followers}`);
  }
});

/*

Use `Promise.race` to see which API resolves faster from the given list of URLs. 
Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

*/

const cat = fetch("https://aws.random.cat/meow").then((res) => res.json());
const dog = fetch("https://random.dog/woof.json").then((res) => res.json());

Promise.race([cat, dog]).then((res) => console.log(res));

/* 

Use `Promise.allSettled` to log the value of each promise from the given list of promises. 
And also check if `Promise.all` works with `one`, `two` and `three` or not

const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

*/

const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Arya"), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Whoops!")), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve("John"), 3000)
);

Promise.all([one, two, third]);

Promise.allSettled([one, two, three]).then((res) => console.log(res));

/*

What will be the output of the following code snippet? How much time will it take for the promise to resolve?

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);

*/

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Arya"), 1000);
  }),
  "Sam",
  { name: "John" },
]).then((res) => console.log(res));

// This promise is resolved in 1s. Output is ["Arya", "Sam", {name: "John"}]
