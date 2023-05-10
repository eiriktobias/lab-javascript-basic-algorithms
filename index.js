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
  console.log(`The driver has the longer name. It has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);
}


//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.



//Iteration 3: Loops

//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".


let word = hacker1;
let newWord = (word.split("").join(" "));
console.log(newWord.toUpperCase());

 

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let word2 = hacker2;
let reverseWord = word2.split("").reverse().join("");

console.log(reverseWord);



//3.3 Depending on the lexicographic order of the strings, print:

//The driver's name goes first.
//Yo, the navigator goes first, definitely.
//What?! You both have the same name?


const a = hacker1; 
const b = hacker2; 


if (a.localeCompare(b) === -1){
  console.log(`The driver's name goes first.`)  
}
else if (a.localeCompare(b) === 1){
  console.log(`Yo, the navigator goes first, definitely.`)
}
else {
  console.log(`What?! You both have the same name?`);
}
 