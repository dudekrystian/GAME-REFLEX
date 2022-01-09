const FIELDS_NUMBER = 96;
let speed = 1000;

export class Field {
    constructor(element) {
        this.element = element;
        this.iDInterval = 0;
    }

    create() {
        const div = this.element = document.createElement('div');
        this.element.classList.add('game__board_field')
        return this.element;
    }

    drawField() {
        this.iDInterval = setInterval(function (e) {

            let randomNumber = (Math.floor(Math.random() * FIELDS_NUMBER + 0));
            const arrayField = [...document.getElementsByClassName('game__board_field')];
            let drawnField = arrayField[randomNumber];
            drawnField.classList.add('drawn');

            if (drawnField) {
                setTimeout(() => {
                    drawnField.classList.remove('drawn');
                }, speed);
            }
        }, speed)
    }

    stopDrawField() {
        clearInterval(this.iDInterval);
    }




}
