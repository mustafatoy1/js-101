/*

Create a function that will receive an array of numbers as
argument and will return a new array with distinct elements

Bir fonsiyon olustur


let result = [] ;

[1,3,3]

hak = [1, 3, ]




*/

function distinct(arr) {
  let result = [];

  for (let index = 0; index < arr.length; index++) {
    if (!result.includes(arr[index])) {
      result.push(arr[index]);
    }
  }

  return result;
}

console.log(distinct([1, 3, 3, 5]));

/*

Create a function. function will return the number of words in a text

"Ali ata bak"

*/

function splitWords(text) {
  const words = text.split(" ");

  return words.length;
}

console.log(splitWords("Ali ata bak"));

/*

Create a function that will capitalize the first letter of each word in a text
Bir yaznın içindeki her kelimenin ilk harfini büyük harfe çevir

"ali ata bak".split(" ")
["ali","ata","bak"]



ipucu--> "".toUpperCase() => bu büyük harfe çevirir

*/

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function makeCapitalize(text) {
  let yeniStr = "";

  let words = text.split(" "); // ["ali","ata","bak"]

  for (let sayi = 0; sayi < words.length; sayi++) {
    const buyutulmusStr = capitalizeFirstLetter(words[sayi]);

    if (sayi === 0) {
      // 1.döngü
      yeniStr += buyutulmusStr;
    } else {
      // 2.den itibaren
      yeniStr = yeniStr + " " + buyutulmusStr;
    }
  }

  return yeniStr;
}

console.log(makeCapitalize("ali ata bak"));

function makeCapitalize2(text) {
  let result = [];

  text.split(" ").forEach((word) => {
    const str = capitalizeFirstLetter(word); // 'Ali'

    result.push(str);
  });

  return result.join(" "); // ['Ali', 'Ata', 'Bak'] -> 'Ali Ata Bak'
}

console.log(makeCapitalize2("ali ata bak"));
