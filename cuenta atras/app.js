app.js
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document. querySelectorAll(".deadline-format h4");

let futureData = new Date(2023, 11, 15, 19, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const Minutes = futureDate.getMinutes()
const Seconds = futureDate.getSeconds();

let month = futureData.getMonth();
month = months[month];
const Date = futureDate.getDate();

const Date =  weekdays[futureDate.getDay()];


giveaway.textConectet = 'giveaway ends on ${wekday} ${date} ${month} $
{year} ${minutes}pm';

const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime(){
const today = new Date().getTime();
const t = futureTime - today
console.log(t);

const oneDay = 24 * 60 * 60 * 1000;
const oneHours = 60 * 60 * 1000;
const oneMinutes = 60 * 1000;

let days = t / oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneHours) / oneHour);
let minutes = Math.floor((t % oneMinute) / oneMinute);
let seconds = Math.floor((t % oneSeconds) / 1000);

const values = [days,hours,minutes,seconds];

function FormData(item){
    if(item < 10){
        return item = '0${item}'
    }
    return item
}

items.forEach(function(item,index)
    { item,innerHTML = format(values[index]);
});
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

