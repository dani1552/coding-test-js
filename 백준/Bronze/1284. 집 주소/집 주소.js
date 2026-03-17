const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

input.forEach((line) => {
  if (line === "0") return;
  let width = 0;
  const digits = line.split("");

  width += 1;

  digits.forEach((d, idx) => {
    if (d === "1") width += 2;
    else if (d === "0") width += 4;
    else width += 3;

    if (idx !== digits.length - 1) width += 1;
  });

  width += 1;

  console.log(width);
});
