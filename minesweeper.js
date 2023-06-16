const image = document.getElementById("hidden");
const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

const size = 50;
let x = 0;
let y = 0;

drawImage(0,0);
drawImage(100,100);
drawImage(200,200);

function drawImage(x, y) {
  c.drawImage(image, x, y, size, size);
}