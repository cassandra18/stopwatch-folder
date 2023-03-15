window.onload = function() {
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById('tens'); // points to the span element with id= to tens
var appendSeconds = document.getElementById('seconds'); // initialised with the span element with id of seconds = 00
var buttonStart = documnt.getElementById('start-button') // value is = start button in html
var buttonStop = documnt.getElementById('stop-button') // value is = stop button in html
var buttonReset = documnt.getElementById('reset-button') // value is = reset button in html
var interval;

buttonStart.onlick = function(){ //the start button performs the following function on clicking
clearInterval(interval); // the code prevents the the start button from callling itself when clicked 2 | more times
interval = setInterval(startTimer, 10); // the var interval is initialised with the setInterval method that will call the function at the inetrvals of 10
}

buttonStop.onlick = function() {
    clearInterval(interval); // stops the stop watch from counting
}

buttonReset.onclick = function() {
    tens = "00"; // the tens var is reassigned a string '00'
    seconds = '00'; // the seconds var is reassigned a string '00'
    appendTens.innerHTML = tens;//the variable that was declared above (appendTens) pointed to the html element with the id of tens. now the element with the id of tens is re-assigned the value of tens ='00'
    appendSeconds.innerHTML = seconds;//the variable that was declared above (appendSeconds) pointed to the html element with the id of seconds. now the element with the id of seconds is re-assigned the value of seconds ='00'
}
function startTimer() {
    tens++; // when the setTimer func is called the tens increment by 1
    if (tens <= 9){
        appendTens.innerHtml = '0' + tens; // the value of the tens element changes to the srting 0 plus the value of tens
    }
    if(tens > 9){
        appendSeconds.HTML = tens;
    }
    if(tens > 99) {
        console.log('seconds');
        seconds++; // when tens is greater than 99 increment seconds by 1
        appendSeconds.innerhtml = '0' + seconds; // the value of the element with id of seconds in the html is assigned the value '0' plus the value of seconds
        tens = 0 ; // the value of tens is reinitialized to 0
        appendTens = '0' + 0; // the value of tens is reassigned the value 0 + tens value
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds; // when the value of seconds in the loop is greater than 9, the element with the id of seconds is assigned the new value of seconds
    }
}
}























