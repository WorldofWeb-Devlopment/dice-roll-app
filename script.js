//selecting score elements and setting default score 0

const score1el = document.getElementById("score--1");
const score2el = document.getElementById("score--2");
const player1el = document.getElementById("player-1");
const player2el = document.getElementById("player-2");
const diceimg = document.getElementById("dice-img");
const rollDice = document.getElementById("roll-dice");
const currentScorceel = document.querySelector(".current-score");
const currentScorceel1 = document.querySelector(".current-score1");
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const holdbtn = document.getElementById("hold");
const newgame = document.getElementById("new-game");

score1el.textContent = 0;
score2el.textContent = 0;
let currentScore = 0;
let total = 0;
let score = [0, 0, 0];
let activePlayer = 1;
let playing = true;

function switchPlayer() {
  document.getElementById(`current-score--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  currentScore = 0;
  card1.classList.toggle("active");
  card2.classList.toggle("active");
}
//dice roll function
rollDice.addEventListener("click", function () {
  diceimg.style.display = "block";
  let Dice = Math.floor(Math.random() * 6) + 1;
  diceimg.src = `${Dice}.png`;

  if (Dice !== 1) {
    //Add to current score
    currentScore += Dice;
    document.getElementById(`current-score--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch next player
    switchPlayer();
  }
});

newgame.addEventListener("click", () => {
  score1el.textContent = 0;
  score2el.textContent = 0;
  activePlayer = 1;
  currentScore = 0;
  score[(0, 0, 0)];
  console.log("clicked");
  card1.classList.add("active");
  card2.classList.remove("active");
});

//hold logic

holdbtn.addEventListener("click", () => {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    console.log("score2el");

    if (score[activePlayer] >= 100) {
      playing = false;

      document.querySelector(`.card-${activePlayer}`).classList.add("success");
      document
        .querySelector(`.card-${activePlayer}`)
        .classList.remove("active");
      diceimg.style.display = "none";
      holdbtn.disabled = true;
      newgame.disabled = true;
      rollDice.disabled = true;
      document.getElementById(`player-${activePlayer}`).innerHTML = "You Win ";
    }
  } else {
    switchPlayer();
  }
});
