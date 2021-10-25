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
        <h1 class="mhdr">Coding Week Assignment</h1>
        <div class="wrapper">
          <div class="tab active" id="tab1">
            <h2>Task 1</h2>
            <h2>Current Day and Time</h2>
            <div class="cdayt">
              <h2 id="current-day"></h2>
              <h2 id="current-time"></h2>
            </div>
          </div>
          <div class="tab" id="tab2">
            <h2>Task 2</h2>
            <h2>Current Date</h2>
            <div class="cdate">
              <h2 id="current-date"></h2>
            </div>
          </div>
          <div class="tab" id="tab3">
            <div class="triangle">
              <h2>Task 3</h2>
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
            <h2>Task 4</h2>
            <h2>String Rotation</h2>
            <div class="list-wrapper">
              <p class="extList"></p>
            </div>
          </div>
          <div class="lpyr-con">
            <h2>Task 5</h2>
            <h2>Leap Year</h2>
            <div class="input-con">
              <label for="inputyr">Enter year</label>
              <input type="number" value="" id="yrinput" />
              <button id="lp-btn">Check</button>
              <p id="lprndr"></p>
            </div>
          </div>
          <div class="tsk6con">
            <h2>Task 6</h2>
            <h2>Sunday Lookup</h2>
            <div class="input-con">
              <label for="yrinpt">Enter year</label>
              <input type="number" value="" id="inptyr" />
              <button id="sun-btn">Check</button>
              <p id="sunrndr"></p>
            </div>
          </div>
          <div class="tsk7con">
            <h2>Task 7</h2>
            <h2>Number Guess</h2>
            <div class="input-con">
              <button id="num-btn">Check</button>
              <p id="numrndr"></p>
            </div>
          </div>
          <div class="tsk8con">
            <h2>Task 8</h2>
            <h2>Days left in Next Independence Day</h2>
            <p id="dayrndr"></p>
          </div>
          <div class="tsk9con">
            <h2>Task 9</h2>
            <h2>Multiplication & Division</h2>
            <div class="input-con">
              <label for="num1">Number 1</label>
              <input type="number" id="num1" placeholder="Enter any number" />
              <label for="num1">Number 2</label>
              <input type="number" id="num2" placeholder="Enter any number" />
            </div>
            <div class="btn-con">
              <button id="btn-1">Multiply</button>
              <button id="btn-2">Divide</button>
            </div>
            <div class="mdrncon">
              <p id="multirndr"></p>
              <p id="divirndr"></p>
            </div>
          </div>
          <div class="tsk10con">
            <h2>Task 10</h2>
            <h2>Temperature Coverter</h2>
            <h3>C to F/F to C</h3>
            <div class="temp-con">
              <div class="t-con">
                <label for="tempc">Temperature (C)</label>
                <input
                  type="number"
                  id="tempc"
                  placeholder="Enter any number"
                />
                <button id="c2f">C to F</button>
                <div class="resrndr">
                  <p id="c2fres"></p>
                </div>
              </div>
              <div class="t-con">
                <label for="tempf">Temperature (F)</label>
                <input
                  type="number"
                  id="tempf"
                  placeholder="Enter any number"
                />
                <button id="f2c">F to C</button>
                <div class="resrndr">
                  <p id="f2cres"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="tsk11con">
            <h2>Task 11</h2>
            <h2>Addition or Triple Sum</h2>
            <div class="input-con addcon">
              <label for="num1">Number 1</label>
              <input type="number" id="n1" placeholder="Enter any number" />
              <label for="num1">Number 2</label>
              <input type="number" id="n2" placeholder="Enter any number" />
              <div class="addbtn-con">
                <button id="add-btn">Add</button>
              </div>
              <p class="space">=</p>
              <div class="addrndr">
                <p id="addres"></p>
              </div>
            </div>
          </div>
          <div class="tsk12con">
            <h2>Task 12</h2>
            <div class="input-con th-con">
              <label for="thnum">Enter Number </label>
              <input type="number" id="thnum" placeholder="Enter any number" />
              <div class="th-btncon">
                <button id="th-btn">Check</button>
              </div>
            </div>
            <div class="th-rescon">
              <p id="thres"></p>
            </div>
          </div>
          <div class="tsk13con">
            <h2>Task 13</h2>
            <h2>Largest of three numbers</h2>
            <div class="input-con ln-con">
              <label for="ln1">Number 1</label>
              <input type="number" id="ln1" />
              <label for="ln2">Number 2</label>
              <input type="number" id="ln2" />
              <label for="ln3">Number 3</label>
              <input type="number" id="ln3" />
            </div>
            <div class="ln-btncon">
              <button id="ln-btn">Check</button>
            </div>
            <div class="lnres-con">
              <p id="lnres"></p>
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

.mhdr {
  padding: 50px;
}

.lpyr-con,
.tsk6con,
.tsk7con,
.tsk8con,
.tsk9con,
.tsk10con,
.tsk11con,
.tsk12con,
.tsk13con {
  text-align: center;
  padding: 20px;
  /* margin: 20px; */
}

.input-con {
  margin: 50px;
}

#lp-btn,
#sun-btn,
#num-btn,
#btn-1,
#btn-2,
#c2f,
#f2c,
#add-btn,
#th-btn,
#ln-btn {
  padding: 5px 15px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #111;
  cursor: pointer;
  color: #ddd;
  margin-left: 10px;
}

#lprndr,
#sunrndr,
#dayrndr,
#f2cres,
#c2fres,
#lnres {
  border: 1px solid #ddd;
  margin: 50px;
  padding: 5px;
  font-weight: 600;
  font-size: 2.5rem;
  color: red;
}

input::placeholder {
  text-align: left;
}

#btn-1,
#btn-2 {
  margin: 0 25px;
  margin-left: 70px;
}

.mdrncon {
  margin: 50px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

#multirndr,
#divirndr {
  margin-left: 70px;
  padding: 5px 10px;
  font-weight: 600;
  font-size: 2.5rem;
  color: red;
}

#multirndr {
  margin-left: 100px;
}

.temp-con {
  margin: 50px;
  display: inline-grid;
  grid-gap: 10px;
  grid-template-columns: auto;
  justify-content: center;
  align-content: center;
}

.t-con {
  margin: 25px;
}

.addbtn-con {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
}

.addcon,
.th-con {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#addres,
#thres {
  margin: 15px;
  border: 1px solid #ddd;
  padding: 5px 10px;
  color: red;
}

.space {
  margin: 0 25px;
}

.ln-con {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 50px;
}

#ln1,
#ln2,
#ln3 {
  margin: 20px 0;
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
  // console.log("min", minutes);
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
    lprndr.innerText = `${inpYear} is a leap year.`;
    lprndr.style.color = "green";
  } else {
    lprndr.innerText = `${inpYear} is not a leap year.`;
    lprndr.style.color = "red";
  }
};

// 6.
let sunBtn = document.getElementById("sun-btn");
sunBtn.onclick = function sunLookUp() {
  let input = Number(document.getElementById("inptyr").value);
  console.log("input", input);
  let sunRndr = document.getElementById("sunrndr");
  var year = input;
  if (year >= "2014" && year <= "2050") {
    var date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      sunRndr.innerText = `1st January is being a Sunday in the year ${year}`;
      sunRndr.style.color = "green";
    } else {
      sunRndr.innerText = `1st January is not being a Sunday in the year ${year}`;
      sunRndr.style.color = "red";
    }
  } else {
    sunRndr.innerText = "Please enter year between 2014 and 2050.";
    sunRndr.style.color = "red";
  }
};

// 7.
let numBtn = document.getElementById("num-btn");
numBtn.onclick = function promptIt() {
  let userNum = Number(prompt("Please choose any number between 1 and 10"));
  if (userNum >= "1" && userNum <= "10") {
    alert("Good Work");
  } else {
    alert("Not matched");
  }
};

// 8.
const e = new Date();

const nDate = new Date(2022, 07, 14);

const DaysLeft = Math.round((nDate.getTime() - e.getTime()) / 86400000);
console.log("DaysLeft", DaysLeft);
let dayRndr = document.getElementById("dayrndr");
dayRndr.innerText = `${DaysLeft} days left!`;

// 9.
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
let multiBtn = document.getElementById("btn-1");
let diviBtn = document.getElementById("btn-2");

// Multiply
multiBtn.onclick = function () {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let multiBtn = document.getElementById("btn-1");
  let diviBtn = document.getElementById("btn-2");
  let multiRndr = document.getElementById("multirndr");
  let multi = num1 * num2;
  console.log("multi", multi);
  multiRndr.innerText = multi;
};
// Divide
diviBtn.onclick = function () {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let multiBtn = document.getElementById("btn-1");
  let diviBtn = document.getElementById("btn-2");
  let diviRndr = document.getElementById("divirndr");
  let divi;
  if (num1 === "0" && num2 === "0") {
    divi = Number(num1 / num2).toFixed(2);
  } else if (num2 === 0 && num1 !== 0) {
    alert("The Number 2 can not be a zero");
  } else {
    divi = Number(num1 / num2).toFixed(2);
  }
  console.log("divi", divi);
  diviRndr.innerText = divi;
};

// 10.
// Temp converter
let c2FBtn = document.getElementById("c2f");
let tempC = Number(document.getElementById("tempc").value);
let f2cBtn = document.getElementById("f2c");
let tempF = Number(document.getElementById("tempf").value);

c2FBtn.onclick = function () {
  let tempC = Number(document.getElementById("tempc").value);
  let crndr;
  crndr = (tempC * 9) / 5 + 32;
  console.log("crndr", crndr);
  let c2fRes = document.getElementById("c2fres");
  c2fRes.innerText = crndr.toFixed(2);
};

f2cBtn.onclick = function () {
  let tempF = Number(document.getElementById("tempf").value);
  let frndr;
  frndr = tempF - (32 * 5) / 9;
  console.log("frndr", frndr);
  let f2cRes = document.getElementById("f2cres");
  f2cRes.innerText = frndr.toFixed(2);
};

// 11.
let n1 = Number(document.getElementById("n1").value);
let n2 = Number(document.getElementById("n2").value);
let addBtn = document.getElementById("add-btn");
let addRes = document.getElementById("addres");

addBtn.onclick = function () {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let n3 = n1 + n2;
  if (n1 === n2) {
    n3 * 3;
    addRes.innerText = n3 * 3;
  } else {
    addRes.innerText = n3;
  }
};

// 12.
let thNum = Number(document.getElementById("thnum").value);
let thBtn = document.getElementById("th-btn");
let thRes = document.getElementById("thres");

thBtn.onclick = function () {
  let thNum = Number(document.getElementById("thnum").value);
  let thBtn = document.getElementById("th-btn");
  let thRes = document.getElementById("thres");
  if (Math.abs(100 - thNum) <= 20 || Math.abs(400 - thNum) <= 20) {
    thRes.innerText = "The given number is within the 20 of 100 or 400";
  } else {
    thRes.innerText = "The given number is not within the 20 of 100 or 400";
  }
};

// 13.
let lN1 = Number(document.getElementById("ln1").value);
let lN2 = Number(document.getElementById("ln2").value);
let lN3 = Number(document.getElementById("ln3").value);
let lnBtn = document.getElementById("ln-btn");
let lnRes = document.getElementById("lnres");

lnBtn.onclick = function () {
  let lN1 = Number(document.getElementById("ln1").value);
  let lN2 = Number(document.getElementById("ln2").value);
  let lN3 = Number(document.getElementById("ln3").value);
  let lnBtn = document.getElementById("ln-btn");
  let lnRes = document.getElementById("lnres");
  let lNum = Math.max(lN1, lN2, lN3);
  lnRes.innerText = lNum;
};

</script>
