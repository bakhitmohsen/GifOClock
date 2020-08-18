let currentTime = new Date();
let currentHours = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();
if (currentMinute < 10){
    currentMinutes = `0${currentTime.getMinutes()}`;
}
let currentSeconds = currentTime.getSeconds();
if (currentSeconds < 10){
    currentSeconds = `0${currentTime.getSeconds()}`;
}
let clockTime = `${currentHours} : ${currentMinutes} : ${currentSeconds}`;
console.log(clockTime);
document.getElementById("time").innerHTML = clockTime;
if (currentHour >= 21) {
    document.getElementById("gif").src="https://giphy.com/embed/9ySjUSpUbFMre";
    document.getElementById("message").innerHTML = "It's time to go";
}else if (currentHour > 19){
    document.getElementById("gif").src="https://giphy.com/embed/cP56PsG4vgCWOSQTsG";
    document.getElementById("message").innerHTML = "Going DARK";
} else if (currentHours > 15 && currentHours < 18){
    document.getElementById("gif").src="https://giphy.com/embed/VSGo8jRxzsmQw";
    document.getElementById("message").innerHTML = "CHEERS!";
} else if (currentHours > 11 && currentHours < 13){
    document.getElementById("gif").src="https://giphy.com/embed/ZFJYcVE5lYvWE";
    document.getElementById("message").innerHTML = "Back to work";
}