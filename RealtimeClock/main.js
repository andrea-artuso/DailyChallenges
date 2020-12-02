var audio = new Audio('');

function displayDate(){
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var tzone = d.getTimezoneOffset();
    var zeroMinutes = "0" + minutes;
    var zeroHours = "0" + hours;

    if (hours < 10){
        document.getElementById('hour').innerHTML = "0" + hours; 
    }
    else {
        document.getElementById('hour').innerHTML = hours;
    }
    if (minutes < 10){
        document.getElementById('minut').innerHTML = "0" + minutes; 
    }
    else {
        document.getElementById('minut').innerHTML = minutes;
    }

    document.getElementById('fuso').innerHTML = "UTC +" + Math.abs(tzone/60);

    if (minutes < 10 && hours < 10){
        document.getElementById('cTime').innerHTML = zeroHours + ":" + zeroMinutes;
    }
    else if (minutes < 10 && hours > 10){
        document.getElementById('cTime').innerHTML = hours + ":" + zeroMinutes;
    }
    else if (minutes > 10 && hours < 10){
        document.getElementById('cTime').innerHTML = zeroHours + ":" + minutes;
    }
    else {
        document.getElementById('cTime').innerHTML = hours + ":" + minutes;
    }

}


setInterval(displayDate, 1000);
setInterval(hourClock, 1000);

function hourClock(){
    if (minutes == 0){
        document.getElementById('overlay').style.visibility = "visible";
    }
    
    if (minutes > 0){
        document.getElementById('overlay').style.visibility = "hidden"; 
    }
}