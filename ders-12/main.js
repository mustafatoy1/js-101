const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// ['I', 'love', ... , 'people', 'HTML']
// kaç kelime oldugunhu ekjrana yazdır
/*
  let cevap = []
  degişken <- text.split(" ")  // ['I', 'love', ...., 'HTML,']

  değişken.forEach(kelime => {
    let temizlenmişKelime = kelime.replace(",", "").replace(".", "") // 'HTML'
    
    cevap.push(temizlenmişKelime)
  })
  console.log(cevap, cevap.length)
*/

let findWords = (text) => {
  let result = [];
  let words = text.split(" ");

  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    let cleanWord = word.replace(",", "").replace(".", "");

    result.push(cleanWord);
  }

  return result;
};
let cevap = findWords(text);
console.log(cevap);
console.log(cevap.length);

//////

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// Remove 'Honey'

shoppingCart.pop();

// arrayin içindeki 'Tea' yi 'Green Tea' olarak güncelle

shoppingCart[2] = "Green Tea";

// shoppingCart'ın başına -eğer daha önce eklenemediyse- 'Meat' ekle

if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}

// shoppingCart'ın sonuna -eğer daha önce eklenemediyse- 'Sugar' ekle

if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

/*
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// eğer 'Saas' webTechs arrayinin içindeyse ekrana 'yeap' yaz, 
yoksa webTechsin içerisine ekle 'Saas'

*/

if (webTechs.includes("Saas")) {
  // eğer varsa
  console.log("Yeap");
} else {
  // yoksa
  webTechs.push("Saas");
}

// bunları birleştir ve yeni bir arraya ata
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

let yeniArray = frontEnd.concat(backEnd);

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age

let numbers = ages.sort();

console.log("min", numbers[0]);
console.log("max", numbers[numbers.length - 1]);

// Find the median age
// sıraladıktan sonra ortanca sayı = median

let numbers = ages.sort();

console.log(numbers[numbers.length / 2]);

let toplam = 0;

ages.forEach((age) => {
  toplam = toplam + age;
});

console.log(toplam / ages.length); // ortalama bulur

// ages arrayindeki maksimum yaş ile minumum yaş arasındaki farkı bul

let numbers = ages.sort();
const fark = numbers[numbers.length - 1] - numbers[0];

console.log(fark);
