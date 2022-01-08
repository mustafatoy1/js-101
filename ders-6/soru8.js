/*
z

sayıları toplam / arr.length



*/

function calculateAveraga(arr) {
  let toplam = 0;

  for (let index = 0; index < arr.length; index++) {
    toplam = toplam + arr[index];
  }

  return toplam / arr.length;
}
var arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
console.log(calculateAveraga(arr));
