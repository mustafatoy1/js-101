/*

Calculate the sum of numbers received in a comma delimited string

let sum = 0;

"1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"

str.split(", ") = ["1.6","2.3","",""]

numbers.forEach(sayi=>{
  sum=sum+sayi
})

 return sum

float --> ondalıklı sayı 0,7 1.5 vs
Int (integer) --> tam sayı 1,2,3

parseFloat("1.5") -->1.5
parseInt("1.5") --> 1 verir


*/

function calculate(str) {
  let sum = 0;

  let numbers = str.split(", ");

  numbers.forEach((sayi) => {
    sum = sum + parseFloat(sayi); // 0 + 1.6
  });

  return sum;
}

console.log(calculate("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
