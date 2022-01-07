/*
1 den 10 a kadar olanların çarpımını ekrana yaz

değişken tanımla (cevap) = 1 le başla  let

sayac 1 den 10 a kadar döngü oluştursun
    cevapla çarpılsın değeride cevapla güncelle



*/

function factorial(sayi) {
  let cevap = 1;

  for (let index = 1; index <= sayi; index++) {
    cevap = index * cevap;
  }

  console.log(cevap);
}

const sayi = 19;

factorial(3);
