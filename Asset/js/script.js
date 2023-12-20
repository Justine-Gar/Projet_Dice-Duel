/**
 * 2 PLAYERS AND 1 DICE
 * the active player can roll the die as many times as they want to accumulate points.
 * If the die shows as 1, th player loses all their point.
 * Otherwise, the points accumulated so far added to the player's score.
 * And now it's player 2 trun to play.
 * the game ends when one of the players reaches a score of 100.
 */

const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.rollBtn');
const holdBtn = document.querySelector('.holdBtn');
const newBtn = document.querySelector('.newBtn');
const current1Score = document.getElementById('current1');
const current2Score = document.getElementById('current2');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const globalScore1 = document.getElementById('globalScore1');
const globalScore2 = document.getElementById('globalScore2');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');


let currentPlayer = 1;
let current1PlayerScore = 0;
let current2PlayerScore = 0;

/*======New Game=====*/


/*======Dice Random=====*/
const randomDice = () => {

  const random = Math.floor(Math.random() * 6) + 1;

  if (random >= 1 && random <= 6) {
    rollDice(random);
  }
  else {
    randomDice();
  }
}

const rollDice = (random) => {

  dice.style.animation = 'rolling 4s';
  setTimeout(() => {

    switch (random) {
      case 1:
        dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
        current1PlayerScore = 0;
        break;
      case 6:
        dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
        break;
      case 2:
        dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
        break;
      case 5:
        dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
        break;
      case 3:
        dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
        break;
      case 4:
        dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
        break;

      default:
        break;
    }

    dice.style.animation = 'none';

    if (random !== 1) {

      updateCurrentScore(random);

    } else {

      current1PlayerScore = 0;
      current2PlayerScore = 0;
      switchPlayer();

    }
    
  }, 4050);
}

const updateCurrentScore = (value) => {
  current1PlayerScore = value;
  current1Score.textContent = current1PlayerScore;
  current2PlayerScore = value;
  current2Score.textContent = current2PlayerScore;
}

/*switch player */
const switchPlayer = () => {

  const playerActive = document.querySelector('.playerActive');
  const currentScore = document.querySelector('.currentScore')
  
}

/*hold score */
const holdScore = () => {

  if (currentPlayer === 1) {
    player1Score += current1PlayerScore;
    globalScore1.textContent = player1Score;
  } else {

  }
  switchPlayer();
}


rollBtn.addEventListener('click', randomDice);
holdBtn.addEventListener('click', holdScore);





/*======Score=======*/
let player1Score = 0;
let player2Score = 0;

score1.textContent = 0;
score2.textContent= 0;