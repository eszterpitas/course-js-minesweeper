const image = document.getElementById("hidden");
const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

const size = 50;
let x = 0;
let y = 0;
const columns = canvas.width / size;
const rows = canvas.height / size;

let map = [
  [0, 0, 0, 9, 0, 0, 0, 0], 
  [2, 3, 4, 9, 0, 0, 0, 0, 0, 0]
];


let animals = []; // elkészítjük az üres `animals` nevű tömböt
animals[0] = 'dog'; // megadjuk, hogy az `animals` tömb 0. indexen lévő eleme legyen a "dog" szöveg
let animalCount = animals.length; // lekérdezzük az `animals` tömb méretét, és eltároljuk az eredményt (1) az `animalCount` változóban
console.log(animalCount); // kiírjuk az `animalCount` változó méretét, ami 1
animals[1] = 'cat'; // megadjuk, hogy az `animals` tömb 1. indexen lévő eleme legyen a "cat" szöveg
console.log(animals.length); // lekérdezzük és kiírjuk az `animals` tömb méretét, ami 2
console.log(animalCount); // kiírjuk az `animalCount` változó méretét, ami még mindig 1, hiszen 1 volt akkor, amikor létrehoztuk ezt a változót

let numberMatrix = [ // ez egy 2 dimenziós, számokat tartalmazó tömb
  [1, 2, 3], // a "kis" tömböket nem muszáj új sorokba írni, de így könnyebben olvasható
  [4, 5, 6],
  [7, 8, 9]
];

console.log(numberMatrix[0][0]); // kiírja a konzolra a tömb 0. elemének 0. elemét, azaz azt, hogy 1

console.log(numberMatrix[0][1]); // kiírja a konzolra a tömb 0. elemének 1. elemét, azaz azt, hogy 2

console.log(numberMatrix[1][0]); // kiírja a konzolra a tömb 1. elemének 0. elemét, azaz azt, hogy 4

console.log(numberMatrix[1][1]); // kiírja a konzolra a tömb 1. elemének 1. elemét, azaz azt, hogy 5

console.log(numberMatrix[2][2]); // kiírja a konzolra a tömb 2. elemének 2. elemét, azaz azt, hogy 9

numberMatrix[0][0] = 11; // a korábban 1-es értéket 11-re módosítja

numberMatrix[0][1] += 2; // a korábban 2-es értékhez hozzáad kettőt, így az 4 lesz

numberMatrix[0][3]++; // a korábban 3-es értéket növeli eggyel, így az 4 lesz

console.log(numberMatrix[0][3]); 

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
