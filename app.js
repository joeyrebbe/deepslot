// Define Constants ====================================
const slot1 = document.querySelector("#slot1");
const slot2 = document.querySelector("#slot2");
const slot3 = document.querySelector("#slot3");
const slot4 = document.querySelector("#slot4");
const slot5 = document.querySelector("#slot5");

const gameDisplay = document.querySelector(".gameDisplay");
const score = document.querySelector("score");

const playButton = document.querySelector(".playButton");

// // Define State Variables ===========================
// //   **do not assign variables until the init funciton**
// // let elements = [{element: "shades", value: 1}, {element: "searchLight", value: 2}, {element: "gun", value: 3}, {element: "globe", value: 4}, {element: "flag", value: 5},]

let winningImgs;
let resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerText = "Big Brother is watching ...";

// // select and save cahed elements ================================
// //  **these need to be accessed more than once

// // add event listeners =================================
// //  **use delegated listeners to listen to multiple events with one listener

// // invoke the init function to initialize all state variables ==================

init = () => {
  let newMachine = new SlotMachine();
  newMachine.render();
  playButton.addEventListener("click", newMachine.playTurn);
};

// invoke the main render function to transfer all state var to DOM ===============

// user triggers event ================================

const shuffle = (arr) => {
  let shuffled = [];
  for (let i = 0; i < arr.length; i++) {
    let x = Math.floor(Math.random() * 5);
    shuffled.push(arr[x]);
  }
  return shuffled;
};

class SlotMachine {
  constructor(options) {
    (this.options = ["gun", "camera", "flag", "globe", "spy"]),
      (this.score = 0);
  }

  appendImgs = (arr) => {
    let slots = [slot1, slot2, slot3, slot4, slot5];
    slots.forEach((slot, i) => {
      slot.innerHTML = `<img src="./images/${arr[i]}.png">`;
    });
  };

  isVictory = (imgs) => {
    const win = imgs.every(img => img === imgs[0])
    if (win) {
      resultDisplay.innerText = "You Have Passed The Test";
    } else {
      resultDisplay.innerText = "You disappoint your government";
    }
  };

  playTurn = () => {
    let shuffledImgs = shuffle(this.options);
    this.appendImgs(shuffledImgs);
    this.isVictory(shuffledImgs);
  };

  render = () => {
    this.appendImgs(this.options);
  };
}

init();
