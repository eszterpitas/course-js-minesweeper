const image = document.getElementById("hidden");
const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

const size = 50;
let x = 0;
let y = 0;
const columns = canvas.width / size;
const rows = canvas.height / size;

const mine = 'mine'

let map = createMap();  
map[0][0] = mine;
map[5][6] = mine;

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

function createMap() {
  let map = [];
  for (let j = 0; j < rows; j++) {
    let row = [];
    for (let i = 0; i < columns; i++) {
      row[i]= 0;
    }
    map [j] = row;
  }
  return map;
}

