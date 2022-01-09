export class Life {
    constructor(life) {
        this.life = life;
        this.element = document.getElementById('player_live__span');
    }

    removeLife() {
        return this.element.innerText = --this.life;
    }

    resetLife() {
        this.life = 3;
        return this.element.innerText = this.life;
    }

}