const alphabet = document.getElementById("alphabet");
alphabet.className = "alphabet";
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const output = document.getElementById("output");
const lives = document.createElement("div");
document.body.appendChild(lives);

let result = 10;
setInterval(isUpdating, 10);
function isUpdating() {
  lives.innerHTML = `You have ${result} lives left`;
}
for (let i = 0; i < letters.length; i++) {
  const container = document.createElement("button");
  container.innerHTML = letters[i];
  container.className = "box";
  container.id = i;
  container.addEventListener("click", function () {
    if (secretWord.includes(letters[i])) {
      if (output.innerHTML.includes(letters[i])) {
      } else {
        for(let j = 0; j < secretWord.length; j++) {
            
        }
      }
    } else {
      if (result <= 0) {
      } else {
        console.log("-1");
        result = result - 1;
      }
    }
  });
  alphabet.appendChild(container);
}
const secretWord = `windex`;

for (let i = 0; i < secretWord.length; i++) {
  const replacement = document.createElement("div");
  replacement.className = "secretWord";
  output.appendChild(replacement);
};

