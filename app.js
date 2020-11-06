// Define Constants ====================================
const slot1 = document.querySelector('#slot1');
const slot2 = document.querySelector('#slot2');
const slot3 = document.querySelector('#slot3');
const slot4 = document.querySelector('#slot4');
const slot5 = document.querySelector('#slot5');

const gameDisplay = document.querySelector('.gameDisplay');
const result = document.getElementbyId('resultDisplay');


const gun = document.createElement('img')
const camera = document.createElement('img')
const globe = document.createElement('img')
const flag = document.createElement('img')
const spy = document.createElement('img')
const playButton = document.querySelector('.playButton')




// // Define State Variables ===========================
// //   **do not assign variables until the init funciton** 
// // let elements = [{element: "shades", value: 1}, {element: "searchLight", value: 2}, {element: "gun", value: 3}, {element: "globe", value: 4}, {element: "flag", value: 5},]

let winningImgs; 

// // select and save cahed elements ================================
// //  **these need to be accessed more than once


gun.src = './images/gun.png'
camera.src = './images/camera.png'
globe.src = './images/globe.png'
flag.src = './images/flag.png'
spy.src = './images/spy.png'


// // add event listeners =================================
// //  **use delegated listeners to listen to multiple events with one listener


// // invoke the init function to initialize all state variables ==================

init = () => {
  let newMachine = new SlotMachine;
  newMachine.render ();
  playButton.addEventListener('click', newMachine.playTurn);
}

// invoke the main render function to transfer all state var to DOM ===============



// user triggers event ================================

const shuffle = (arr) => {
  let shuffled = [];
  for (let i=0; i<arr.length; i++) {
    let x = Math.floor(Math.random() * 5)
    shuffled.push(arr[x])
  }
  return shuffled;
}

class SlotMachine  {
  constructor(options) {
    this.options = [gun, camera, flag, globe, spy],
    this.score = 0 
  }

  appendImgs = (arr) => {
    let slots = [slot1, slot2, slot3, slot4, slot5];
    slots.forEach((slot, i) => {
      slot.append(arr[i]);
    })
  }

  isVictory = (columns) => {
    columns.forEach((column, idx) => {
      if (column === this.options[idx]) {
        this.score += 1;
      }})
      if (score === 5) {
        // return prize(this.options);
        alert ("You Have Passed The Test");
      }
      else {
        alert ("You disappoint your government");
      }
    }


  playTurn = () => {   
   let shuffledImgs = shuffle(this.options);
   slot1.innerHTML = '';
   slot2.innerHTML = '';
   slot3.innerHTML = '';
   slot4.innerHTML = '';
   slot5.innerHTML = '';
   this.appendImgs(shuffledImgs);
   this.isVictory(this.options);
  }     


  render = () => {
    let winningImgs = this.options;
    this.appendImgs(this.options);
    winningImgs.forEach((img, i) => {
      img.textContent = img[i];
    })
    for (let score in this.score) {
      this.score.innerText = score
    }
  }
}


// const newMachine = new SlotMachine(array)
// console.log(newMachine.slots)
// newMachine.playTurn()
// console.log(newMachine.slots)


// reset/replay?? ===================================

// update state variables impacted by user interaction ==========================

// invoke main render function ====================================

init ();







