let arr = [1, 3, 5, 7, 100, 0];
let yeniArray = [1, 4, 6, 8];

arr.length; // arr'deki kaç elemanın olduğunu gösterir
arr.concat([5, 4, 2]); // 2 array birleştirmeyi sağlar

arr.concat(yeniArray);

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

// yukarıdaki ve aşağıdaki aynı

arr.forEach((mustafa) => console.log(mustafa));

yeniArray.forEach((sayi) => {
  const yeniSayi = sayi * 1000;
  console.log(yeniSayi);
});

arr.includes("mustafa"); // false  arrayin içine var mı yok mu diye sorgular
arr.includes(5); // true

arr.join(","); // "1,3,5,7,100,0"
arr.join("*"); // "1*3*5*7*100*0"

arr.pop(); // sondaki elemanı sil
arr.push(50); // arrayin sonuna 50 sayısını ekler

arr.shift(); // baştaki elemanı sil
arr.unshift(7); // arrayin başına 7 sayısını ekler

arr.reverse(); // arrayi tersine çevir

arr.sort(); // arrayi küçükten büyüğe sırala

arr.filter(function (sayi) {
  return sayi > 2;
}); // arrayin içindeki sayılardan sadece 2 den büyük olanları alır ve döner [3,5,7,100]

arr.map((sayi) => sayi * 2); // arrayin içindeki sayıları sadece 2 ile çarpar ve döner [6,10,14,200]

arr.slice(1); // arraydeki 1.eleman hariç her birini al [3,5,7,100,0]
arr.slice(1, 3); // arraydeki 1.eleman hariç her birini al [3,5]
arr.slice(2, 5); // arraydeki 1.eleman hariç her birini al [5,7,100]
