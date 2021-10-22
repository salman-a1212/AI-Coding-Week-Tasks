<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Coding Week Tasks</title>
  </head>
  <body>
    <div class="main">
      <div class="app">
        <!-- <div class="tab-btn">
          <button class="tablinks">Current Day & Time</button>
          <button class="tablinks">Current Date</button>
          <button class="tablinks">Triangle Area</button>
        </div> -->
        <div class="wrapper">
          <div class="tab active" id="tab1">
            <h2>Current Day and Time</h2>
            <div class="cdayt">
              <h2 id="current-day"></h2>
              <h2 id="current-time"></h2>
            </div>
          </div>
          <div class="tab" id="tab2">
            <h2>Current Date</h2>
            <div class="cdate">
              <h2 id="current-date"></h2>
            </div>
          </div>
          <div class="tab" id="tab3">
            <div class="triangle">
              <h2 class="hdtri">Area of a triangle</h2>
              <div class="tri-grid">
                <div class="fld">
                  <label for="side1"> Side 1 length: </label>
                  <input
                    type="number"
                    id="side1"
                    placeholder="Enter value of side 1"
                    value="5"
                  />
                </div>
                <div class="fld">
                  <label for="side2"> Side 2 length: </label>
                  <input
                    type="number"
                    id="side2"
                    placeholder="Enter value of side 2"
                    value="6"
                  />
                </div>
                <div class="fld">
                  <label for="side3"> Side 3 length: </label>
                  <input
                    type="number"
                    id="side3"
                    placeholder="Enter value of side 2"
                    value="7"
                  />
                </div>
                <p id="area">Triangle Area: <span id="display"></span></p>
                <button id="calc">Calculate</button>
              </div>
            </div>
          </div>
          <div class="str-con">
            <h2>String Rotation</h2>
            <div class="list-wrapper">
              <p class="extList"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Source Sans Pro", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.cdayt,
.cdate {
  border: 1px solid #ddd;
  margin: 50px;
  padding: 10px;
}

#current-day {
  font-weight: 400;
  font-style: italic;
  text-align: center;
}

#current-time,
#current-date {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
}

.tri-grid {
  display: grid;
  grid-gap: 50px;
  grid-template-columns: auto auto;
  justify-content: center;
  align-content: center;
}

#calc {
  width: 35%;
  padding: 5px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #111;
  cursor: pointer;
  color: #ddd;
  margin-left: 10px;
}

.hdtri {
  text-align: center;
  margin-bottom: 50px;
}

.triangle {
  margin: 20px;
}

#display {
  border: 1px solid #111;
  padding: 5px 25px;
  font-size: 1.5rem;
  color: red;
  font-weight: 600;
  margin-left: 10px;
  background-color: #fff;
}

input {
  padding: 5px;
  text-align: end;
}

label {
  margin: 0 10px;
}

#area {
  margin-left: 10px;
}

.triangle {
  background-color: #ddd;
  padding: 25px;
}

.tab {
  text-align: center;
}

.str-con,
.list-wrapper {
  text-align: center;
  margin: 50px;
}
</style>

<script>
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
</script>
