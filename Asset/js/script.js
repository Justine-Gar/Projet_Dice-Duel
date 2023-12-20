/**
 * 2 PLAYERS AND 1 DICE
 * the active player can roll the die as many times as they want to accumulate points.
 * If the die shows as 1, th player loses all their point.
 * Otherwise, the points accumulated so far added to the player's score.
 * And now it's player 2 trun to play.
 * the game ends when one of the players reaches a score of 100.
 */

//players
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
//dice
const dice = document.querySelector('.dice');
//btns
const rollBtn = document.querySelector('.rollBtn');
const holdBtn = document.querySelector('.holdBtn');
//global score
const globalScore1 = document.getElementById('globalScore1');
const globalScore2 = document.getElementById('globalScore2');
//current score
const current1 = document.getElementById('current1');
const current2 = document.getElementById('current2');


globalScore1.textContent = 0;
globalScore2.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let playerActive = 1;

//switch
function switchPlayer() {

  document.getElementById(`current${playerActive}`).textContent = 0;
  
  if (playerActive === 1) {
      playerActive = 2;
  }else {
      playerActive = 1;
  }
  currentScore = 0;
  //déplace la class playeractive
  player1.classList.toggle("playerActive");
  player2.classList.toggle("playerActive");
}


//==btn Roll==//
function randomDice() {

  let random;
  do {
    random = Math.floor(Math.random() * 6) + 1;
  } while (random < 1 || random > 6);

  rollDice(random);
}
/*function randomDice() {
  //1.generer un random 
  const random = Math.floor(Math.random() * 6) + 1;
  //2.condition/vérifié si nbr générer et entre 1 et 6
  if (random >= 1 && random <= 6) {
    rollDice(random);
  }
  else {
    randomDice();
  }
}*/

function rollDice (random) {

  //debut animation dice
  dice.style.animation = 'rolling 4s';
  setTimeout(() => {

    switch (random) {
      case 1:
        dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
        currentScore = 0;
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
    //arret animation dice
    dice.style.animation = 'none'

    if (random !== 1) {
      //score add
      currentScore += random;
      //current1.textContent = currentScore;
      document.getElementById(`current${playerActive}`).textContent = currentScore;
    } else {
      //change joueur 
      switchPlayer()
    }
    
  }, 4050);
}

rollBtn.addEventListener('click', randomDice);


//==btn Hold==//

function holdScore() {
  scores[playerActive] = parseInt(scores[playerActive], 10) || 0;
  scores[playerActive] += currentScore;
  //console.log(scores);
  document.getElementById(`globalScore${playerActive}`).textContent = scores[playerActive];

 if(scores[playerActive] >= 100) {

 } else {
  //switch de joueur
  switchPlayer()
 }

}

holdBtn.addEventListener('click', holdScore);
