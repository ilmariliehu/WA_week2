import "./styles.css";

document.getElementById("board").innerHTML = `
<h1>Tic Tac Toe</h1>
<div>*************************************</div>
<div>Player 1, you are playing with X</div>
<div>Player 2, you are playing with O</div>
<div>*************************************</div>`;

var counter = 0;
var clockCounter = 0;
var timeoutID;
var timeinterval;
var width = 0;
var id;

var body = document.body,
  table = document.createElement("table");

var clock = document.getElementById("clockdiv");
var elem = document.getElementById("InnerProgressBar");

createtable();

function createtable() {
  for (var i = 0; i < 5; i++) {
    var tableRow = table.insertRow();
    for (var j = 0; j < 5; j++) {
      if (i === 1 && j === 5) {
        break;
      } else {
        var tableCell = tableRow.insertCell();
        var cellText = document.createTextNode("");
        tableCell.appendChild(cellText);
        if (i === 1 && j === 1) {
          tableCell.setAttribute("rowSpan", "1");
        }
      }
    }
  }
}
body.appendChild(table);
onclick(table);

function onclick(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].onclick = function() {
        tableText(this);
      };
    }
  }
}

function tableText(tableCell) {
  if (counter % 2 === 0) {
    if (tableCell.innerHTML === "") {
      tableCell.innerHTML = "X";
      tableCell.style.backgroundColor = "rgb(124, 252, 0)";
      ClearTimeout(this);
      changeTurn(this);
      //move();
      whoWon(table);
      checkDraw(table);

      counter++;
    } else {
      alert("Pick other cell!");
    }
  } else {
    if (tableCell.innerHTML === "") {
      tableCell.innerHTML = "O";
      tableCell.style.backgroundColor = "rgb(250, 128, 114)";
      ClearTimeout(this);
      changeTurn(this);
      //move();
      whoWon(table);
      checkDraw(table);
      counter++;
    } else {
      alert("Pick other cell!");
    }
  }
}

function whoWon(table) {
  var xORy = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var vaaka1 = 0;
    var vaaka2 = 0;
    var vaaka3 = 0;
    var vaaka4 = 0;
    var vaaka5 = 0;
    var pysty1 = 0;
    var pysty2 = 0;
    var pysty3 = 0;
    var pysty4 = 0;
    var pysty5 = 0;
    var viisto1 = 0;
    var viisto2 = 0;

    for (var j = 0; j < 5; j++) {
      if (table.rows[0].cells[j].innerHTML === xORy[i]) {
        vaaka1++;
      }
      if (table.rows[1].cells[j].innerHTML === xORy[i]) {
        vaaka2++;
      }
      if (table.rows[2].cells[j].innerHTML === xORy[i]) {
        vaaka3++;
      }
      if (table.rows[3].cells[j].innerHTML === xORy[i]) {
        vaaka4++;
      }
      if (table.rows[4].cells[j].innerHTML === xORy[i]) {
        vaaka5++;
      }
      if (table.rows[j].cells[0].innerHTML === xORy[i]) {
        pysty1++;
      }
      if (table.rows[j].cells[1].innerHTML === xORy[i]) {
        pysty2++;
      }
      if (table.rows[j].cells[2].innerHTML === xORy[i]) {
        pysty3++;
      }
      if (table.rows[j].cells[3].innerHTML === xORy[i]) {
        pysty4++;
      }
      if (table.rows[j].cells[4].innerHTML === xORy[i]) {
        pysty5++;
      }
      if (table.rows[j].cells[j].innerHTML === xORy[i]) {
        viisto1++;
      }
      var reduce = 4 - j;
      if (table.rows[j].cells[reduce].innerHTML === xORy[i]) {
        viisto2++;
      }
    }

    if (
      vaaka1 === 5 ||
      vaaka2 === 5 ||
      vaaka3 === 5 ||
      vaaka4 === 5 ||
      vaaka5 === 5 ||
      pysty1 === 5 ||
      pysty2 === 5 ||
      pysty3 === 5 ||
      pysty4 === 5 ||
      pysty5 === 5 ||
      viisto1 === 5 ||
      viisto2 === 5
    ) {
      if (xORy[i] === "X") {
        alert("Player 1 won!");
        clearTable(table);
        ClearTimeout();
        clearWidth();
        counter = 1;
        break;
      }
      if (xORy[i] === "O") {
        alert("Player 2 won!");
        clearTable(table);
        ClearTimeout();
        clearWidth();
        counter = 1;
        break;
      }
    }
  }
}

function clearTable(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].innerHTML = "";
      table.rows[i].cells[j].style.backgroundColor = "white";
    }
  }
}

function checkDraw(table) {
  var count = 0;
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      if (
        table.rows[i].cells[j].innerHTML === "X" ||
        table.rows[i].cells[j].innerHTML === "O"
      ) {
        count++;
      }
    }
  }
  if (count === 25) {
    alert("It's draw!");
    clearTable(table);
    ClearTimeout();
    counter = 0;
  }
}

/*function move() {
  clearInterval(id)
  clearWidth();
  id = setInterval(frame, 100);
  function frame(){
    if (width >= 100) {
      clearWidth();
      clearInterval(id);
    } else {
      //width = width + 4;
      width++
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
    }
  }
}*/

function clearWidth() {
  width = 0;
  elem.style.width = width + "%";
  elem.innerHTML = width + "%";
}

function updateClock() {
  clock.innerHTML = 10 - clockCounter;
  clockCounter++;
}

function changeTurn() {
  clearInterval(id);
  clearWidth();
  id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      clearWidth();
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
    }
  }

  clockCounter = 0;
  clearInterval(timeinterval);
  timeinterval = setInterval(updateClock, 1000);
  timeoutID = setTimeout(alertTimeout, 10000);
  updateClock();
}

function alertTimeout() {
  counter++;
  alert("Timeout!");
  changeTurn();
}

function ClearTimeout() {
  clearTimeout(timeoutID);
}
