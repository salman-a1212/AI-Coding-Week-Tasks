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

// 3.
const calc = document.getElementById("calc");

calc.onclick = function Area() {
  var side1 = parseInt(document.getElementById("side1").value);

  var side2 = parseInt(document.getElementById("side2").value);

  var side3 = parseInt(document.getElementById("side3").value);

  console.log(typeof side1);
  var s = (side1 + side2 + side3) / 2;

  var area = Math.round(
    Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)))
  );

  document.getElementById("display").innerHTML = area;
};

// 4.
var str = "Saylani";
var str1 = "";

var len = str.length;

var j = len - 1;

for (var i = 0; i < len; i++) {
  let extList = document.querySelector(".extList");
  //console.log(str.length);
  var sTr = str[j];
  str = str.slice(0, -1);
  // console.log(str);
  // j--;
  str = sTr + str;
  console.log(str);
  extList.innerHTML += str + "<br>" + "<br>";
}

// 5.
// program to check leap year

let lpBtn = document.getElementById("lp-btn");
lpBtn.onclick = function checkLeapYear() {
  let inpYear = Number(document.getElementById("yrinput").value);
  console.log("inpYear", inpYear);
  const leap = new Date(inpYear, 1, 29).getDate() === 29;
  let lprndr = document.getElementById("lprndr");
  if (leap) {
    lprndr.innerText = `${inpYear} is a leap year`;
  } else {
    lprndr.innerText = `${inpYear} is not a leap year`;
  }
};
