/*

dışarıdan gelen arrayin length i >5 ise true dönsün,yoksa false


*/

function isBigger(sayilar) {
  if (sayilar.length > 5) {
    return true;
  } else {
    return false;
  }
}

let mahmut = [];

console.log(isBigger(mahmut));
mahmut.push(5);
mahmut.push(10);
mahmut.push(2);
mahmut.push(6);
mahmut.push(2);
mahmut.push(6);

console.log(mahmut.length);
console.log(isBigger(mahmut));

mahmut.pop();
console.log(isBigger(mahmut));
