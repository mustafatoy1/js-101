/*
degişkenler

const deneme = [10, 2, "asdsad", 3];
let deneme2 = [3, 4, 6];
let mustafa = 90;
let mustafa2 = true;  // boolean
let mustafa3 = "mustafa toy";
let kullanici = { name: "yasn" };


soru?

Array'deki sayıların toplamını hesaplayın

ipucu : arr.length   arrayin uzunlugunu verir
arr[sayac]

*/

function calculate(arr) {
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }

  return sum;
}

console.log(calculate([1, 2, 3, 4, -1, -2]));
