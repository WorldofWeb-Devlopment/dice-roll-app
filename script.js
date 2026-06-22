//selecting score elements and setting default score 0

const score1el = document.querySelector(".score--0");
const score2el = document.querySelector(".score--1");
const diceimg = document.getElementById("dice-img");
const rollDice = document.getElementById("roll-dice");
const player1 = document.getElementById("player-1");
const score1 = document.querySelector(".score-1");
const score2 = document.querySelector(".score-2");
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const player2 = document.getElementById("player-2");
const holdbtn = document.getElementById("hold")

score1el.textContent = 0;
score2el.textContent = 0;
let currentScore = 0;
let total = 0 


//dice roll function
rollDice.addEventListener("click", function () {

    diceimg.style.display = "block"
  let Dice = Math.floor(Math.random() * 6) + 1;
  diceimg.src = `${Dice}.png`;


  //Adding Current score in player 1
  if (Dice === 1) {
    card1.style.backgroundColor = "#af6e8e";
    score1.textContent = 0
    card2.style.backgroundColor = "#d6a4b0"
  } else {
    currentScore = currentScore + Dice;
    score1.textContent = currentScore;
    console.log(currentScore);
    
  }
  
});

//Player1 clicking Hold 
 holdbtn.addEventListener("click",()=>{
    total = currentScore
    score1el.textContent = total
    card1.style.backgroundColor = "#af6e8e";
    card2.style.backgroundColor = "#d6a4b0"
 })

