`use strict`

class CountdownTimer {
    constructor ( selector, targetDate ) {
        this.selector = selector;
        this.targetDate = new Date( targetDate );
        this.timer = this.timer.bind( this );
    };

    timer () {
        const day = document.querySelector( '[data-value="days"]' );
        const hour = document.querySelector( "[data-value='hours']" );
        const minute = document.querySelector( "[data-value='mins']" );
        const second = document.querySelector( "[data-value='secs']" );
        const currentDate = Date.now();
        this.time = this.targetDate - currentDate;
        const days = Math.floor( this.time / ( 1000 * 60 * 60 * 24 ) );
        const hours = Math.floor( ( this.time % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
        const mins = Math.floor( ( this.time % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
        const secs = Math.floor( ( this.time % ( 1000 * 60 ) ) / 1000 );
        day.textContent = days;
        hour.textContent = hours;
        minute.textContent = mins;
        second.textContent = secs;
        if( days < 10 ) {
            day.textContent = `0${days}`;
        }
        if( hours < 10 ) {
            hour.textContent = `0${hours}`;
        }
        if( mins < 10 ) {
            minute.textContent = `0${mins}`;
        }
        if( secs < 10 ) {
            second.textContent = `0${secs}`;
        }
    }
    start () {
        setInterval( this.timer, 1000 );
    }
}

const countdownTimer = new CountdownTimer( "#timer-1", "2020 december 31 20:00" );
countdownTimer.start();