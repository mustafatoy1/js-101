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

let arr = [];
let arr1 = [1, 2, 3, "ali", [], { name: "yasin" }];

arr1.length;
arr1[0]; //ilk eleman
arr1[arr1.length - 1]; // son eleman
arr1[arr1.length / 2]; // ortanca eleman

console.log(arr1[0]); // ekrana ilk degeri yazdır

for (let index = 0; index < webTechs.length; index++) {
  console.log(webTechs[index]);
}

webTechs.forEach((text) => {
  console.log(text);
});
