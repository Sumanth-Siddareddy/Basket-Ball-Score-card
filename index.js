let HomePoints = 0
let HomeFouls = 0

let GuestPoints = 0
let GuestFouls = 0

let flag = 0;

function HomeAdd_1(){
    HomePoints += Number(document.getElementById("HomeNumber_1").getAttribute("value"));
    document.getElementById("Homepoints").textContent = HomePoints;
}
function HomeAdd_2(){
    HomePoints += Number(document.getElementById("HomeNumber_2").getAttribute("value"));
    document.getElementById("Homepoints").textContent = HomePoints;
}
function HomeAdd_3(){
    HomePoints += Number(document.getElementById("HomeNumber_3").getAttribute("value"));
    document.getElementById("Homepoints").textContent = HomePoints;
}
function HomeFoul(){
    HomeFouls += 1;
    document.getElementById("HomeFoul").textContent = "Foul : "+HomeFouls;
}

function GuestAdd_1(){
    GuestPoints += Number(document.getElementById("GuestNumber_1").getAttribute("value"));
    document.getElementById("Guestpoints").textContent = GuestPoints;
}
function GuestAdd_2(){
    GuestPoints += Number(document.getElementById("GuestNumber_2").getAttribute("value"));
    document.getElementById("Guestpoints").textContent = GuestPoints;
}
function GuestAdd_3(){
    GuestPoints += Number(document.getElementById("GuestNumber_3").getAttribute("value"));
    document.getElementById("Guestpoints").textContent = GuestPoints;
}
function GuestFoul(){
    GuestFouls += 1;
    document.getElementById("GuestFoul").textContent = "Foul : "+GuestFouls;
}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + " : " + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function startTime(){
    var FourtyMinutes = 60 * 40;
    display = document.getElementById('time-left');
    startTimer(FourtyMinutes, display);
}