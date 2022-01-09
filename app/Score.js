export class Score {
    constructor(score) {
        this.score = score;
        this.element = document.getElementById('player_score__span');
    }

    addScore() {
        return this.element.innerText = ++this.score;
    }

    resetScore() {
        this.score = 0;
        return this.element.innerText = this.score;
    }

}