let iDInterval = 0;

export class Timer {
    constructor(timeSeconds) {
        this.timeSeconds = timeSeconds;
        this.startSeconds = timeSeconds;
    }

    setTimerInHTML() {
        document.getElementById('player_timer').innerHTML = ` TIME  ${this.timeSeconds}`;
    }


    startTimer() {


        this.setTimerInHTML();

        iDInterval = setInterval(() => {
            this.timeSeconds--;
            this.setTimerInHTML();

            if (this.timeSeconds === 0) {

                this.stopTimer();
            }

        }, 1000);

    }

    resetTimer() {
        this.stopTimer();
        this.timeSeconds = this.startSeconds;

    }

    stopTimer() {
        clearInterval(iDInterval);
    }

}




