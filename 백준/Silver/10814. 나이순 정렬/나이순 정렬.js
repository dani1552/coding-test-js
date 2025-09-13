const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
let users = input.slice(1, n + 1).map((line) => {
  const [age, name] = line.split(" ");
  return [Number(age), name];
});

users.sort((a, b) => a[0] - b[0]);

console.log(users.map((user) => user.join(" ")).join("\n"));
