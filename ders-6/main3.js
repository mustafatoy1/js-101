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

// factorial(3);

// bir fonksiyon oluştur
// dışardan gelen isim ve soyisim parametlerini ekrana yazdırsın

function yazdir(isim, soyisim) {
  console.log(isim, soyisim);
}

yazdir("yasin", "toy");
yazdir("mustafa", "toy");

//isim gelecek eğer yasinse ekrana yaz

function isimYazdir(isim, yas) {
  if (isim === "yasin" || isim === "Yasin" || isim === "YASIN") {
    console.log("doğru");
  } else if (isim === "mustafa" && isim === "MUSTAFA") {
    console.log("Mustafa");
  } else if (isim === "mustafa" && yas === 25) {
    console.log("lalalala");
  } else {
    console.log("olmadı");
  }
}

isimYazdir("Mustafa");
isimYazdir("yasin");
isimYazdir("Yasin");
isimYazdir("MUSTAFA");
isimYazdir("KASIM");
isimYazdir("mustafa", 25);
