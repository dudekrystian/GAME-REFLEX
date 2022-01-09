import { Board } from './Board.js';
import { Timer } from './Timer.js';
import { Score } from './Score.js';
import { Life } from './Life.js';



export class Game {
    constructor({ boardGame, timerGame, scoreGame, buttonStart, buttonReset, lifeGame }) {
        this.boardGame = boardGame;
        this.timerGame = timerGame;
        this.scoreGame = scoreGame;
        this.buttonStart = buttonStart;
        this.buttonReset = buttonReset;
        this.lifeGame = lifeGame;
    }




    run() {
        this.boardGame.addElementToBoard();
        this.buttonStart.addEventListener('click', (e) => {
            this.startGame();
            buttonStart.disabled = true;
        })

        this.buttonReset.addEventListener('click', (e) => {
            this.stopGame();
            buttonStart.disabled = true;

        })
    }

    checIfClickCorrect = () => {

        const items = [...this.boardGame.element.children];
        items.forEach(item => {

            item.addEventListener('click', function (e) {
                if (e.target.className === "game__board_field drawn") {
                    scoreGame.addScore();
                    if (timerGame.timeSeconds === 0 || timerGame.timeSeconds < 0) {
                        buttonStart.disabled = true;
                        boardGame.stopDrawElement();
                        buttonStart.disabled = true;
                        lifeGame.resetLife();
                        scoreGame.resetScore();
                        timerGame.resetTimer();
                        alert(`Twój wynik ${scoreGame.score}`)


                    }

                }

                else {
                    lifeGame.removeLife();
                    if (lifeGame.life === 0 || lifeGame.life < 0) {
                        boardGame.stopDrawElement();
                        buttonStart.disabled = true;
                        lifeGame.resetLife();
                        scoreGame.resetScore();
                        timerGame.resetTimer();

                        alert('porażka');

                    }
                }
            })
        })
    }


    startGame() {

        this.boardGame.showDrawElement();
        this.timerGame.startTimer();
        this.checIfClickCorrect();

    }

    stopGame() {
        this.timerGame.resetTimer();
        this.lifeGame.resetLife();
        this.scoreGame.resetScore();
        this.boardGame.showDrawElement();
        this.timerGame.startTimer();
    }
}

const buttonStart = document.getElementById('button_start');
const buttonReset = document.getElementById('button_reset');
const boardGame = new Board(document.getElementById('board'));
const timerGame = new Timer(20);
const scoreGame = new Score(0);
const lifeGame = new Life(3);

const game = new Game({
    boardGame,
    timerGame,
    scoreGame,
    lifeGame,
    buttonReset,
    buttonStart
});

game.run();
