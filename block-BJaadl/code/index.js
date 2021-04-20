let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
words.forEach(findLongestWord)
let long = 0;
function findLongestWord(item){
if(item.length>long)
{
  long = item.length;
  longestword = item;
}
}
console.log(longestword);
// - Convert the above array "words" into an array of length of word instead of word.
let wordsindex = words.map(indexreturn)
function indexreturn(item){
item = item.length;
return item;
}
console.log(wordsindex);
// - Create a new array that only contains word with atleast one vowel.
let vowel = words.filter(check)
function check(item)
{
  if(item.includes('a')||item.includes('e')||item.includes('i')||item.includes('o')||item.includes('u'))
  {
    return item;
  }
}
console.log(vowel);
// - Find the index of the word "rhythm"
words.forEach(check)
function check(item,index)
{
  if(item === "rhythm")
  {
    check_index = index;
  }
}
console.log(check_index);
// - Create a new array that contians words not starting with vowel.
let not_vowel = words.filter(check)
function check(item)
{
  if(item.startsWith('a')||item.startsWith('e')||item.startsWith('i')||item.startsWith('o')||item.startsWith('u'))
  {
    return item;
  }
}
console.log(not_vowel);
// - Create a new array that contianse words not ending with vowel
// let not_vowel = words.filter(check)
// function check(item)
// {
//   if(item.endsWith('a')||item.endsWith('e')||item.endsWith('i')||item.endsWith('o')||item.endsWith('u'))
//   {
//     delete item;
//   }
//   return item;
// }
// console.log(not_vowel);
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sum =0;
numbers.forEach(add)
function add(item){
  sum = sum + item;
  console.log(sum);
}
console.log(sum);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let a = numbers.map(multi);
function multi(item)
{
  return item*3;
}
console.log(a);
// - Create a new array that contains only even numbers
let a = numbers.filter(even);
function even(item)
{
  if(item%2===0)
  {
    return item;
  }
}
console.log(a);
// - Create  a new array that contains only odd numbers.
let a = numbers.filter(even);
function even(item)
{
  if(item%2!==0)
  {
    return item;
  }
}
console.log(a);
// - Create a new array that should have true for even number and false for odd numbers.
let a = numbers.map(even);
function even(item)
{
  if(item%2!==0)
  {
    return true;
  }
  else return false
}
console.log(a);
// - Sort the above number in assending order.
let sorted = numbers.sort(ascending)
function ascending(a,b)
{
  return a - b;
}
console.log(sorted);
// - Does sort mutate the original array?
//yes
// - Find the sum of the numbers in the array.
let sum = numbers.reduce(add, 0)
function add(acc, item)
{
  return acc + item;
}
console.log(sum);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let sum = numbers.reduce(add, 0)
function add(acc, item)
{
  return acc + item;
}
console.log(sum/numbers.length);


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let sum = strings.reduce(averageWordLength, 0)
function averageWordLength(acc, item)
{
  return acc + item.length;
}
console.log(sum/strings.length);