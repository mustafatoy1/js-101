/*

Dışarıdan Array alan ve yalnızca pozitif sayıları içeren bir array döndüren bir işlev oluşturun

var arr = [-2, 3, -1, 5, 7, 9, 10, -15, 9, -5];
console.log(onlyPositive(arr));

*/

// 1. yol

function onlyPositive(arr) {
  let cevap = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      cevap.push(arr[index]);
    }
  }

  return cevap;
}

// 2.yol

function onlyPositive2(arr) {
  let cevap = [];

  arr.forEach((sayi) => {
    // arrayin her elemanın gez ve sayi degişkenine ata
    if (sayi > 0) {
      cevap.push(sayi);
    }
  });

  return cevap;
}

// 3.yol
function onlyPositive3(arr) {
  return arr.filter((sayi) => sayi > 0);
}

// verilen arraydeki sayıların 2yle çarpılmış halini array içinde geri döndüren fonk
// [1,2,3,4] => [2, 4, 6, 8]
// function sayilari2ileCarp(arr) {
//   let cevap = [];

//   for (let index = 0; index < arr.length; index++) {
//     const element = array[index];

//     cevap.push(element * 2)
//   }

//   return cevap;
// }

// function sayilari2ileCarp(arr) {
//   return arr.map((sayi) => sayi * 2);
// }

// var arr = [-2, 3, -1, 5, 7, 9, 10, -15, 9, -5];
// console.log(onlyPositive(arr));
// console.log(onlyPositive2(arr));
// console.log(onlyPositive3(arr));
