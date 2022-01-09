import { Field } from './Field.js';

export class Board {
    constructor(element) {
        this.element = document.getElementById('board')
        this.field = new Field();
        this.fieldNumber = 96;
    }

    addElementToBoard() {
        let i = 0;
        for (i = 0; i < this.fieldNumber; i++) {
            this.element.appendChild(this.field.create());
        }
    }

    showDrawElement() {
        this.field.drawField();
    }

    stopDrawElement() {
        this.field.stopDrawField();
    }



}





