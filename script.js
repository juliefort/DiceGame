/* Récupérer les éléments du DOM */ 
const player0 = document.querySelector('.player0');
const player1 = document.querySelector('.player1');

const newGame = document.querySelector('.newGame');
const diceImages = document.querySelector('.diceImages');

const currentScore0 = document.getElementById('current0');
const globalScore0 = document.getElementById('globalScore0');

const currentScore1 = document.getElementById('current1');
const globalScore1 = document.getElementById('globalScore1');

const rollDice = document.querySelector('.rollDice');
const hold = document.querySelector('.hold');

/* Initialisation du jeu */

let playing;
let scores;
let activePlayer;
let currentScore;

const init = () => {
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;

    currentScore0.textContent = 0;
    globalScore0.textContent = 0;

    currentScore1.textContent = 0;
    globalScore1.textContent = 0;

    playing = true; 

    player0.classList.add('activePlayer'); 
    player1.classList.remove('activePlayer');  
}

init();

/* Section Lancer du dé */

rollDice.addEventListener('click', () => {
    if(playing) {
        const dice = Math.floor(Math.random() * 6) + 1;
        diceImages.src = `img/dice-${dice}.png`;
        diceImages.classList.remove('hide');

        if(dice !== 1) {
            currentScore += dice;
            document.getElementById(`current${activePlayer}`).textContent = 
            currentScore;
        } else {
            switchPlayer();
        }
    }
});

/* Mis en place d'une fonction Switch Player */ 

const switchPlayer = () => {
    currentScore = 0;
    document.getElementById(`current${activePlayer}`).textContent = 
    0;

    activePlayer = activePlayer === 0 ? 1:0;
    player0.classList.toggle('activePlayer');
    player1.classList.toggle('activePlayer');
}

switchPlayer();

/* Ajouter les points currentScore au globalScore */ 

hold.addEventListener('click', () => {
    if(playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`globalScore${activePlayer}`).textContent =
        scores[activePlayer];

        if(scores[activePlayer] >= 100) {
            playing = false;
            document
            .querySelector(`.player${activePlayer}`).classList.remove('activePlayer');
            document
            .querySelector(`.player${activePlayer}`).classList.add('winner');
            alert('Vous avez gagné !')
        } else {
            switchPlayer();
        }
    }
});

/* Réinitialisation d'un nouveau jeu */

newGame.addEventListener('click', () => {
    init();
})