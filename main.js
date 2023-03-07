// global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start')
const stop_btn = document.getElementById('stop')
const reset_btn = document.getElementById('reset')

let seconds = 0;
let interval = null;

//Event Listeners

//Update the timer
function timer () {
    seconds++;
}