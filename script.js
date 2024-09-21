//task 1

let str = prompt("Enter the word").toLowerCase();
let reversedStr = str.split("").reverse().join("");

if (str === reversedStr) {
  console.log(`The word ${str} is a palindrome.`);
} else {
  console.log(`The word ${str} is not a palindrome.`);
}

//task 2

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
const newArr = fruits.splice(1, 2);
console.log(newArr);

//task 3

const fruits1 = ["Banana", "Orange", "Apple", "Kiwi"];
const sortedFruits = fruits1.sort();
console.log(sortedFruits);

//taks 4

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// TEST DATA 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins / avgKoalas >= 2) {
    console.log(`dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas / avgDolphins >= 2) {
    console.log(`coalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// TEST DATA 2
let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins2, scoreKoalas2);
