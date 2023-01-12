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

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

const typeWrite = async (typeClass, textList) => {
  if (countTyping == textList.length) {
    countTyping = 0;
  }
  currentWord = textList[countTyping];
  currentLetter = currentWord.slice(0, ++indexTyping);
  document.querySelector(typeClass).textContent = currentLetter;
  if (indexTyping == currentWord.length) {
    await sleep(1500);
    while (indexTyping > 0) {
      currentLetter = currentWord.slice(0, --indexTyping);
      document.querySelector(typeClass).textContent = currentLetter;
      await sleep(50);
    }
    countTyping++;
    indexTyping = 0;
    await sleep(500);
  }
  setTimeout(typeWrite, Math.random() * 200 + 50, typeClass, textList);
};
typeWrite(".typing", texts);
