/*

"Create a function that converts a string to an array of characters"

['c', 'r', 'e', ..... ]  boşlukları alma


Karşılaştırma işlemleri -> compare 

sayi1 < sayi2
sayi1 <= sayi2

sayi1 > sayi2
sayi1 >= sayi2

"1" == 1   -> true
"1" === 1  -> false  bunu kullan

5 === 10 ->5 ile 10 eşit mi ? false

5 !== 10 -> true



loop 0....< .length ;++
  ıf boşluk değilse
    buraya push toLowerCase []
      []
      
*/

function getCharacters(input) {
  let result = [];

  for (let index = 0; index < input.length; index++) {
    if (input[index] !== " ") {
      result.push(input[index].toLowerCase());
    }
  }

  return result;
}

console.log(
  getCharacters(
    "Create a function That Converts a string to an array of characters"
  )
);

let str = "Create a function That Converts a string to an array of characters";

// for (let index = str.length - 1; index >= 0; index--) {
//   if (str[index] !== " ") {
//     console.log(str[index]);
//   }
// }

var arr = [
  ["John", 120],
  ["Jane", 115],
  ["Thomas", 123],
  ["Mel", 112],
  ["Charley", 122],
];

// console.log(arr[2][0]);

var arr2 = [
  [0, 120],
  [1, 115],
  [2, 123],
  [7, 112],
  [100, 122],
];

let sum = 0;

for (let row = 0; row < arr2.length; row++) {
  for (let column = 0; column < arr2[row].length; column++) {
    sum = sum + arr2[row][column];
  }
}

/*
  arrayin içindeki maksimum elemanı bulup, geri dönen bir fonksiyon yaz

              [5, 10, 100, 7, 9, 1, -8, 50]
max = 5        [-9, -7, -7, -1]


*/

function findMax(numbers) {
  let max = 0;

  numbers.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });

  return max;
}

const numbers = [5, 10, 100, 7, 90000, 1, -8];

console.log(findMax(numbers));
