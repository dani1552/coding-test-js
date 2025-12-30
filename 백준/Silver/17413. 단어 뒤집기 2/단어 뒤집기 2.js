const fs = require("fs");
const s = fs.readFileSync(0, "utf8").trimEnd(); 

let res = [];
let word = [];   
let inTag = false;  

for (let i = 0; i < s.length; i++) {
  const ch = s[i];

  if (ch === "<") {
    while (word.length) res.push(word.pop());
    inTag = true;
    res.push(ch);
  } else if (ch === ">") {
    inTag = false;
    res.push(ch);
  } else if (inTag) {
    res.push(ch);
  } else {
    if (ch === " ") {
      while (word.length) res.push(word.pop());
      res.push(" ");
    } else {
      word.push(ch);
    }
  }
}

while (word.length) res.push(word.pop());
console.log(res.join(""));
