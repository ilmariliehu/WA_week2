import "./styles.css";

document.getElementById("board").innerHTML = `
<h1>Tic Tac Toe</h1>
<div>*************************************</div>
<div>Player 1, you are playing with X</div>
<div>Player 2, you are playing with O</div>
<div>*************************************</div>`;

var counter = 0;
var body = document.body,
  table = document.createElement("table");
table.style.border = "3px solid black";

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
        tableCell.style.border = "3px solid black";
        tableCell.style.width = "70px";
        tableCell.style.height = "70px";
        tableCell.style.textAlign = "center";
        tableCell.style.backgroundColor = "rgb(255,255,255)";
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
      tableCell.style.backgroundColor = "rgb(255, 255, 255)";
      //tableCell.style.fontFamily = "Helvetica";
      tableCell.style.fontSize = "40px";
      whoWon(table);
      checkDraw(table);
      counter++;
    } else {
      alert("Pick other cell!");
    }
  } else {
    if (tableCell.innerHTML === "") {
      tableCell.innerHTML = "O";
      tableCell.style.backgroundColor = "rgb(255, 255, 255)";
      //tableCell.style.fontFamily = "Helvetica";
      tableCell.style.fontSize = "40px";
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
        counter = 1;
        break;
      }
      if (xORy[i] === "O") {
        alert("Player 2 won!");
        clearTable(table);
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
    counter = 0;
  }
}
