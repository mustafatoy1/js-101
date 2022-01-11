/*

Create a function that will return an array with words inside a text


let text = "Create a function, that will return an array (of string), with the words inside the text";

text.split(" ")



*/

function getWords(text) {
  let tempWords = text.split(" ");
  let result = [];

  tempWords.forEach((word) => {
    let temp = word.replace(",", "").replace("(", "").replace(")", "");

    result.push(temp);
  });

  return result;
}

console.log(
  getWords(
    "Create a function, that will return an array (of string), with the words inside the text"
  )
);
