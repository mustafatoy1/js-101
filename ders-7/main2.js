/*
  Rotate an array to the left 2 position
  bir fonksiyon oluştur
  bu fonksiyon dışardan bir array alsın
  bu arrayin sola 1 defa it edilmiş halini geri dönsün

  [1,2,3,4] -> 3,4,1,2


   let cikarilanSayi = arr.shift()
   arr.push(cikarilanSayi)
  
   let cikarilanSayi = arr.shift()
   arr.push(cikarilanSayi)


  let cikarilanSayi = arr.shift()
   arr.push(cikarilanSayi)
*/

function shiftLeft(arr, adet) {
  let sayi;

  for (let index = 0; index < adet; index++) {
    sayi = arr.shift();
    arr.push(sayi);
  }

  return arr;
}

console.log(shiftLeft([1, 3, 5, 7, 10], 5));

/*

shiftRight -> 3

array [1, 3, 5, 7, 10]

önce sondaki elemanı pop ile çıkar. Bunu atacağımız bir yer tanımla.
Tanımladığımız yeri. arrayin basına unshift yap ve ekle


*/

function shiftRight(arr, sayi) {
  for (let index = 0; index < sayi; index++) {
    let right = arr.pop();
    arr.unshift(right);
  }

  return arr;
}

console.log(shiftRight([1, 3, 5, 7], 3));

/*
    Reverse an array
    [ 1, 3, 5, 7, 10 ]

    [10, 7]



*/

function reverseNumber(arr) {
  let result = [];

  for (let index = arr.length - 1; index >= 0; index--) {
    result.push(arr[index]);
  }

  return result;
}

function reverseNumber2(arr) {
  return arr.reverse();
}

console.log(reverseNumber([3, 4, 5, 6]));
console.log(reverseNumber2([3, 4, 5, 6]));

// reverse string

// "yasin" -> "nisay"

function reverseString(name) {
  let result = "";

  for (let index = name.length - 1; index >= 0; index--) {
    result = result + name[index];
  }

  return result;
}

console.log(reverseString("yasin"));

// dışardan bir string alsın, boşlugu kaldırsın
// "yasin toy"  -> "yasintoy"

/*

let result = 'yasin';

*/

function removeBlank(name) {
  let yeniName = "";

  for (let index = 0; index < name.length; index++) {
    const oAnkiKarakter = name[index];

    if (oAnkiKarakter !== " " && oAnkiKarakter !== ".") {
      yeniName = yeniName + oAnkiKarakter;
    }
  }

  return yeniName;
}

function removeBlank2(name) {
  return name.replace(" ", "").replace(".", "");
}

console.log(removeBlank("yasin toy")); // yasintoy
console.log(removeBlank("yasin.toy")); // yasintoy

console.log(removeBlank2("yasin toy")); // yasintoy
console.log(removeBlank2("yasin.toy")); // yasintoy

/*

Create a function that will merge two arrays and return the result as a new array

*/

function merge(arr1, arr2) {
  let answer = arr1.concat(arr2);

  return answer;
}

function merge2(arr1, arr2) {
  let result = [];
  for (let index = 0; index < arr1.length; index++) {
    result.push(arr1[index]);
  }
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }

  return result;
}

console.log(merge([1, 2, 3], [3, 2, 1]));
console.log(merge2([1, 3, 5, 7], [4, 5, 6, 7]));

/*

  Coding challenge #26: Create a function that will 
  receive two arrays and will return an array with 
  elements that are in the first array but not in the second


  [1,2,3,4,5]     [3,4,5]

  let result = [];

  for () {
    if 2.arrayin içinde yoksa

  }

*/

function maho(arr1, arr2) {
  let result = [];

  for (let index = 0; index < arr1.length; index++) {
    if (!arr2.includes(arr1[index])) {
      result.push(arr1[index]);
    }
  }

  return result;
}

console.log(maho([1, 5, 6], [2, 5, 6]));
