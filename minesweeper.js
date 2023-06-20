const image = document.getElementById("hidden");
const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

const size = 50;
let x = 0;
let y = 0;
const columns = canvas.width / size;
const rows = canvas.height / size;

let firstRow = [0, 0, 0, 9, 0, 0, 0, 0, 0, 0];
firstRow [3] = 11;

let first = firstRow[3];
let second = firstRow[4];
console.log(first, second);
console.log(firstRow.length);

function drawImage(x, y) {
  c.drawImage(image, x, y, size, size);
}

function drawMap() {
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < columns; i++) {
      drawImage(i * size, j * size);
    }
  }
}

drawMap();
