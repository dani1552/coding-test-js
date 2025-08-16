const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(" ");
const x = parseInt(input[0]);
const y = parseInt(input[1]);

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let totalDays = 0;
for (let i = 0; i < x - 1; i++) {
  totalDays += daysInMonth[i];
}
totalDays += y - 1;

console.log(days[(totalDays + 1) % 7]);
