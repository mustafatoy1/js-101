/*

10'dan büyük ve 30'dan küçük tek sayıların toplamını hesaplayın

11 13 15 17 19.... 29

toplam=0

sayac= 10;sayac <30; sayac++
  if sayac %2===1
    toplam=toplam+sayac

console.log


*/

let toplam = 0;

for (let sayac = 11; sayac < 30; sayac += 2) {
  toplam += sayac;
}

console.log(toplam);
