// Define Constants ====================================
const gameDisplay = document.querySelector('.gameDisplay');
const score = document.querySelector('score');


const gun = document.createElement('img')
const camera = document.createElement('img')
const globe = document.createElement('img')
const flag = document.createElement('img')
const spy = document.createElement('img')
const playButton = document.querySelector('button')


gameDisplay.appendChild(gun)
gameDisplay.appendChild(camera)
gameDisplay.appendChild(globe)
gameDisplay.appendChild(flag)
gameDisplay.appendChild(spy)







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
  playButton.addEventListener('click', newMachine.playTurn());
  newMachine.render ();
}

// invoke the main render function to transfer all state var to DOM ===============



// user triggers event ================================

const shuffle = (arr) => {
  let shuffled = arr
  let currentIndex = arr.length
  let temporaryValue
  let randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = shuffled[currentIndex]
    shuffled[currentIndex] = shuffled[randomIndex]
    shuffled[randomIndex] = temporaryValue
  }
  return shuffled
}

class SlotMachine  {
  constructor(options) {
    this.options = [gun, camera, flag, globe, spy],
    this.slots = [shuffle(this.options), shuffle(this.options), shuffle(this.options), shuffle(this.options), shuffle(this.options)],
    this.score = 0 
    // this.prizes = [ttd, panic, phantasm, anarchy, nineteen,] // add audio to these variables
  }

  isVictory = (columns) => {
    columns.forEach((column, idx) => {
      if (column === this.options[idx]) {
        this.score += 1;
      }})
      if (score === 5) {
        // return prize(this.options);
        return "You Have Passed The Test"
      }
      else {
        return "You disappoint your government"
      }
    }


  playTurn = () => {   
    let count = 0
    while (count<5) {
      this.slots[count] = shuffle(this.slots[count]);
      count +=1;
      playButton.textContent = 'Reset';
      this.isVictory (this.slots);
    } 
  }     


  render = () => {
    let winningImgs = this.options;
    winningImgs.forEach(option => option.style.color = "white");
    winningImgs.forEach((img, i) => {
      img.textContent = img[i];
    })
    for (let score in this.score) {
      this.score.innerText = score
    }
    this.isVictory();
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







