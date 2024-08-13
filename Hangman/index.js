const alphabet = document.getElementById("alphabet");
alphabet.className = "alphabet";
let letters = "abcdefghijklmnopqrstuvwxyz";
const output = document.getElementById("output");
const lives = document.createElement("div");
lives.className = "lives";
document.body.appendChild(lives);
let isDone = false;
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
      }
    } else {
      if (result <= 1) {
        clearInterval(isChecking);
        clearInterval(interVal);
        gameOver();
      } else {
        result--;
      }
    }
    isChecking = setInterval(isComplete(), 1000);
    container.disabled = true;
  });
  alphabet.appendChild(container);
}
function gameOver() {
  const over = document.createElement("div");
  over.id = "over";
  const text = document.createTextNode(`Game Over`);
  const textSecond = document.createTextNode(`The Word was: ${secretWord}`);
  const textBody = document.createElement("div");
  textBody.appendChild(textSecond);
  over.appendChild(text);
  over.appendChild(textBody);
  over.appendChild(playAgain);
  lives.innerHTML = "";
  lives.appendChild(over);
  for (let j = 0; j < secretWord.length; j++) {
    const secretLength = document.getElementsByClassName(secretWord[j]).length;
    for (let l = 0; l < secretLength; l++) {
      document.getElementsByClassName(secretWord[j])[l].innerHTML =
        secretWord[j];
    }
  }
  isDone = true;
}
function isVictory() {
  const over = document.createElement("div");
  over.id = "over";
  const text = document.createTextNode(`You Won!`);
  const textSecond = document.createTextNode(`With ${result} lives left.`);
  const textBody = document.createElement("div");
  textBody.appendChild(textSecond);
  over.appendChild(text);
  over.appendChild(textBody);
  over.appendChild(playAgain);
  lives.innerHTML = "";
  lives.appendChild(over);
}
function isComplete() {
  if (isDone) {
  } else {
    let full = "";
    for (let j = 0; j < secretWord.length; j++) {
      const words = document.getElementById("output").childNodes[j];
      full += words.innerHTML;
    }
    if (full == secretWord) {
      clearInterval(interVal);
      isVictory();
    }
  }
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
  "vibez",
];
const secretWord = choices[Math.floor(Math.random() * choices.length)];
for (let i = 0; i < secretWord.length; i++) {
  const replacement = document.createElement("div");
  replacement.className = secretWord[i];
  replacement.id = "secretWord";
  output.appendChild(replacement);
}
const youWon = document.createElement("div");
const youWonPicture = document.createElement("img");
youWonPicture.src = "image.png";
const playAgain = document.createElement("button");
youWon.id = "won";
youWonPicture.id = "picture";
playAgain.id = "playagain";
// document.body.appendChild(youWon);
playAgain.innerHTML = ">Press here to play again<";
youWon.appendChild(youWonPicture);
youWon.appendChild(playAgain);
playAgain.onclick = reload;
function reload() {
  location.reload();
}
