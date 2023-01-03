const texts = [
  "Flexible.",
  "Reliable.",
  "Problem-solver.",
  "Supportive.",
  "Team-player.",
  "Adaptive.",
];
let countTyping = 0;
let indexTyping = 0;
let decrementTyping = 0;
let currentText = "";
let letter = "";

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

const typeWrite = async () => {
  if (countTyping == texts.length) {
    countTyping = 0;
  }
  currentWord = texts[countTyping];
  currentLetter = currentWord.slice(0, ++indexTyping);
  document.querySelector(".typing").textContent = currentLetter;
  if (indexTyping == currentWord.length) {
    await sleep(1500);
    while (indexTyping > 0) {
      currentLetter = currentWord.slice(0, --indexTyping);
      document.querySelector(".typing").textContent = currentLetter;
      await sleep(50);
    }
    countTyping++;
    indexTyping = 0;
    await sleep(500);
  }
  setTimeout(typeWrite, Math.random() * 200 + 50);
};
typeWrite();
