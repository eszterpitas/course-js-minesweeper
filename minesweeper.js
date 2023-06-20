const image = document.getElementById("hidden");
const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

const size = 50;
let x = 0;
let y = 0;
const columns = canvas.width / size;
const rows = canvas.height / size;

const mine = 'mine'

let map = [
  [0, 0, mine, 9, mine, 0, mine, 0], 
  [2, 3, 4, 9, mine, 0, 0, 0]
];

console.log(map);

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
