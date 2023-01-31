//my current age
const myAge = 29;
// "early" years below
let earlyYears = 2;
earlyYears *= 10.5;
// "later years below"
let laterYears = myAge - 2;
laterYears *= 4;
// calculating final age in dog years
let myAgeInDogYears = earlyYears + laterYears;
// Entering my name for a variable
let myName = "Eric".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
