const str = "The revolution will not be televised";
console.log(str);

//const badString = string;
//console.log(badString);

const h1 = document.querySelector("h1");
/*
h1.textContent = str;
const h2 = document.querySelector(".text2");
const h3 = document.querySelector(".text3");


const single = 'single quotes';
const double = "double quotes";
const backtick = `Backtick`;
h1.textContent = single;
h2.textContent = double;
h3.textContent = backtick;


const name1 = "Chris";
const greeting = `Hello, ${name1}`;
h1.textContent = greeting;

const one = "Hello! ";
const two = "How are you?";
const joined = `${one}${two}`;
h2.textContent = joined;
*/
/*
const button = document.querySelector("button");

function greet(){
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}
button.addEventListener("click", greet);
*/
/*
const greeting = "Hello";
const name2 = "Zeta";
h1.textContent = greeting + ", " + name2;
*/
/*
const song = "Fight the youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score/highestScore)*100}%!`;
h1.textContent = output;
*/
//you need the pre-wrap to preserve the new line in the code below
/*
const newline1 = `One day you finally knew 
what you had to do, and began,`;
h1.textContent = newline1;
h1.style.whiteSpace = 'pre-wrap';
*/
//the \n will work only in the console but not on the innerHTML. you need the pre-wrap even with \n
/*
const newline1 = "One day you finally knew\nwhat you had to do, and began,";
h1.textContent = newline1;
h1.style.whiteSpace = 'pre-wrap';
*/
//const goodQuotes = "She said, 'I'm not going in there!'";
/*
const goodQuotes = "She said, \"I'm not going in there!\"";
h1.textContent = goodQuotes;
*/
/*
const num = 200;
const str1 = "50";
const tryConvert1 = Number(str1) + num;
const tryConvertBack = String(tryConvert1);
const whatType = typeof tryConvertBack;
const output = `${tryConvert1} is the result of converting str1 to number.
Then, this ${tryConvertBack} is now a ${whatType} after converting it back.`;
h1.textContent = output;
h1.style.whiteSpace = 'pre-wrap';
*/
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
h1.textContent = `${text}. 
It has a length of ${text.length}.`;
h1.style.whiteSpace = "pre-wrap";

//remember the charAt starts with zero even though it says the length is 26 for ABC's. the letter z is 25
const paragraph = document.querySelector("p");
let content = "";
paragraph.textContent = `character 26: ${text.charAt(25)}`;
paragraph.style.whiteSpace = 'pre-wrap';
content = paragraph.textContent;

// the unicode character of letter z is at decimal 90
paragraph.textContent = `${content} 
character code at 26: ${text.charCodeAt(25)}`;
content = paragraph.textContent;

paragraph.textContent = `${content}
character at 1: ${text.at(1)}`;
content= paragraph.textContent;
//using brackets
paragraph.textContent = `${content}
character at 24: ${text[24]}`;
content = paragraph.textContent;

paragraph.textContent = `${content}
slice at 2-7: ${text.slice(2, 7)}`;
content = paragraph.textContent;

paragraph.textContent = `${content}
slice negative at -5: ${text.slice(-5)}`;
content = paragraph.textContent;

paragraph.textContent = `${content}
slice positive at 5: ${text.slice(5)}`;
content = paragraph.textContent;

paragraph.textContent = `${content}
substring only positive at 20-25: ${text.substring(20,25)}`;
content= paragraph.textContent;

paragraph.textContent = `${content}
to lower case: ${text.toLowerCase()}`;
content = paragraph.textContent;

let test1 = "hello"
let test2 = "world"
paragraph.textContent = `${content}
using concat: ${test1.concat(" ", test2)}`;
content = paragraph.textContent;

test1 = "   color pencil    ";
paragraph.textContent = `${content}
trim: ${test1.trim()} with length: ${test1.trim().length}`;
content = paragraph.textContent;

//the length of the padding should be longer than the original(the text that needs padding)
test2 = "father";
test2 = test2.padStart(10, "*");
test2 = test2.padEnd(15, "z");
paragraph.textContent = `${content}
padding: ${test2}`;
content = paragraph.textContent;

test1 = "alcohol "
paragraph.textContent = `${content}
repeat 5 times: ${test1.repeat(5)}`;
content = paragraph.textContent;

test1 = "bioderm soap";
paragraph.textContent = `${content}
replace bioderm with safeguard: ${test1.replace("bioderm", "safeguard")}`;
content = paragraph.textContent;

test2 = "I love cats. Cats are very easy to love. Cats are very popular";
paragraph.textContent = `${content}
replaceAll with global and insensitive: ${test2.replaceAll(/cats/ig, "dogs")}`;
content = paragraph.textContent;

test1 = "hello";
const arr1 = test1.split("");
test1="\n";
for(let i=0; i < arr1.length; i++){
    test1 += arr1[i] + "\n";
}
paragraph.textContent = `${content}
split: ${test1}`;
content = paragraph.textContent;
