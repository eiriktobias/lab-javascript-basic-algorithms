//Iteration 1: Names and Input
//1.1 Create a variable hacker1 with the driver's name.

let hacker1 = "Mary";

//1.2 Print "The driver's name is XXXX".

console.log(`The driver's name is ${hacker1}.`);

//1.3 Create a variable hacker2 with the navigator's name.

let hacker2 = "Eirik";

//1.4 Print "The navigator's name is YYYY".

console.log(`The navigator's name is ${hacker2}.`);

//Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longer name. It has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!.`
  );
}

//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.

//Iteration 3: Loops

//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let driver = "";
for (let i = 0; i < hacker1.length; i++) {
  driver += `${hacker1[i]} `;
}
console.log(driver.toUpperCase());

/*let word = hacker1;
let newWord = (word.split("").join(" "));
console.log(newWord.toUpperCase());*/

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let navigatorReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReversed += `${hacker2[i]}`;
}
console.log(navigatorReversed);

/*let word2 = hacker2;
let reverseWord = word2.split("").reverse().join("");

console.log(reverseWord);*/

//3.3 Depending on the lexicographic order of the strings, print:

//The driver's name goes first.
//Yo, the navigator goes first, definitely.
//What?! You both have the same name?

const a = hacker1;
const b = hacker2;

if (a.localeCompare(b) === -1) {
  console.log(`The driver's name goes first.`);
} else if (a.localeCompare(b) === 1) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1

function getWordCount(str) {
  return str.split(" ").filter(function (n) {
    return n != "";
  }).length;
}

const longText =
  "Lorem ipsum dolor sit adipiscing elit. Integer non justo neque. Morbi suscipit et sapien non vulputate. Vivamus eu laoreet nisl. Suspendisse a sodales lorem. Etiam volutpat lacus a tincidunt vulputate. Ut tincidunt quis nisi a rutrum. Integer id sem nisl. Ut sodales congue ornare. Suspendisse a sem rhoncus lorem hendrerit fermentum. Etiam quis porttitor nulla. Vestibulum quis consectetur felis, vel consequat dolor. Nam ut mauris euismod, interdum ipsum bibendum, porttitor ex. Nulla eu pulvinar eros. Proin sit amet lobortis libero. Aliquam volutpat commodo magna, eget feugiat nunc volutpat ac. Nam tempus in lacus non pharetra. Sed consequat ex at sem elementum egestas. Aliquam aliquam, tellus nec elementum pretium, nisi lacus bibendum mauris, ultricies ultrices leo turpis bibendum mi. Aliquam lobortis aliquet consectetur. Nunc facilisis ante neque, eu tempor dolor consectetur dapibus. Fusce et scelerisque velit. Proin ac ipsum at risus consequat iaculis in a justo. Sed posuere tellus et luctus tristique. Vivamus dapibus egestas purus sed interdum. Mauris ac augue erat. Praesent interdum volutpat nulla nec luctus. Vivamus a odio hendrerit, volutpat nisi dapibus, pulvinar lorem. Etiam a mi tincidunt, vestibulum lectus eget, hendrerit augue. Nulla mi libero, bibendum non felis eget, ullamcorper varius dui. Integer sit amet augue nec nibh rhoncus ultrices. Proin erat orci, dapibus eu commodo in, eleifend ac massa. Donec enim ante, dictum eu pulvinar nec, suscipit at sapien. Phasellus nunc enim, dictum nec scelerisque non, accumsan nec sem. Quisque vitae elementum mauris. Suspendisse id nibh porttitor, dapibus erat quis, posuere est. Maecenas pretium dui justo, quis pellentesque nibh feugiat eu. Nulla et orci quis sem ultrices vulputate. Nulla nec posuere mauris, at molestie purus. Pellentesque mauris ipsum, elementum vitae ex id, sodales mollis augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus convallis dolor sit amet lacinia.amet, consectetur";

console.log("Total words: " + getWordCount(longText));

let count = 0;

for (let i = 0; i < longText.length; i++) {
  const twoChars = longText[i] + longText[i + 1];

  if (twoChars === "et") {
    count++;
  }
}

console.log(`The Latin word "et" appears ${count} times.`);

//Bonus 2 (Don´t know how to remove space in between)

let phraseToCheck = "taco cat";
let phraseToCheckTrimmed = phraseToCheck.trim.replaceAll(" ", "");

let phraseReversed = "";
for (let i = phraseToCheckTrimmed.length - 1; i >= 0; i--) {
  phraseReversed += `${phraseToCheckTrimmed[i]}`;
}
if (phraseReversed === phraseToCheckTrimmed) {
  console.log("is palindrome");
} else {
  console.log("is not");
}

console.log(phraseToCheckTrimmed);
