const fs = require("fs");
const [N, B] = fs.readFileSync(0, "utf-8").trim().split(" ");

console.log(parseInt(N, 10).toString(B).toUpperCase());
