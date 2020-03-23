`use strict`

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const body = document.querySelector( `body` );
const startButton = document.querySelector( `button[data-action="start"]` );
const stopButton = document.querySelector( `button[data-action="stop"]` );

const randomIntegerFromInterval = ( min, max ) => {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
};

let promise;

function changeColor () {
    promise = new Promise( ( resolve ) => {
        const intervalId = setInterval( () => {
            body.style.backgroundColor = colors[randomIntegerFromInterval( 0, 5 )];
            return intervalId;
        }, 1000 );
        resolve( intervalId );
    } );
};

startButton.addEventListener( `click`, () => {
    changeColor();
    startButton.disabled = true;
} );

stopButton.addEventListener( `click`, () => {
    promise.then( ( interval ) => {
        setTimeout( () => {
            clearInterval( interval )
        }, 4 );
    } )
    startButton.disabled = false;
} );