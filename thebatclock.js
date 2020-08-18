let currentTime = new Date();
let clockTime = `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`;
if (currentTime.getSeconds() < 10){
    clockTime = `${currentTime.getHours()} : ${currentTime.getMinutes()} : 0${currentTime.getSeconds()}`;
}
console.log(clockTime);
document.getElementById("time").innerHTML = clockTime;