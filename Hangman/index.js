const alphabet = document.getElementById("alphabet");
alphabet.className = "alphabet";
let letters = "abcdefghijklmnopqrstuvwxyz";
const output = document.getElementById("output");
const lives = document.createElement("div");
lives.className = "lives";
document.body.appendChild(lives);

let result = 10;
interVal = setInterval(isUpdating, 10);
function isUpdating() {
  lives.innerHTML = `You have ${result} lives left`;
}
for (let i = 0; i < letters.length; i++) {
  const container = document.createElement("button");
  container.innerHTML = letters[i];
  container.className = "box";
  container.id = i;
  container.addEventListener("click", function () {
    container.style.opacity = "0.25";
    if (secretWord.includes(letters[i])) {
      for (let j = 0; j < secretWord.length; j++) {
        if (secretWord[j].includes(letters[i])) {
          const secretLength = document.getElementsByClassName(
            secretWord[j]
          ).length;
          for (let l = 0; l < secretLength; l++) {
            document.getElementsByClassName(secretWord[j])[l].innerHTML =
              secretWord[j];
          }
        }
        console.log(document.getElementsByClassName(secretWord[j]).length);
      }
    } else {
      if (result <= 1) {
        gameOver();
        clearInterval(interVal);
      } else {
        result--;
      }
      if (a) {
      }
    }
    container.disabled = true;
  });
  alphabet.appendChild(container);
}
function gameOver() {
  const newText = document.createTextNode(
    `Game Over.............. The Word was: ${secretWord}`
  );
  lives.innerHTML = "";
  lives.appendChild(newText);
}
const choices = [
  "cocacola",
  "sprite",
  "fanta",
  "lipton",
  "fuzetea",
  "mounteindew",
  "calpis",
  "pepsi",
  "mirinda",
  "vibez"
];
const secretWord = choices[Math.floor(Math.random() * choices.length)];
for (let i = 0; i < secretWord.length; i++) {
  const replacement = document.createElement("div");
  replacement.className = secretWord[i];
  replacement.id = "secretWord";
  output.appendChild(replacement);
}
