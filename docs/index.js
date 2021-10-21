// 1.
const dayTime = new Date();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[dayTime.getDay()];

document.getElementById("current-day").innerText = `Today is: ${day},`;

console.log("day", day);

var today = new Date();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log("time", time);

function timer() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  console.log("min", minutes);
  var sec = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  var timeStr =
    hours > 11
      ? `${hours} PM ` + " " + ":" + " " + minutes + " " + ":" + " " + sec
      : `${hours} AM ` + " " + ":" + " " + minutes + " " + ":" + " " + sec;

  document.getElementById("current-time").innerHTML = timeStr;
  setTimeout(timer, 1000);
}

timer();

// 2.
const d = new Date();
const m = console.log("d", d);
const currentDate = d.getDate();
const currentMonth = d.getMonth();
const currentYear = d.getFullYear();
const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
document.getElementById("current-date").innerHTML =
  `${currentDate}-` + months[d.getMonth()] + `-${currentYear}`;
