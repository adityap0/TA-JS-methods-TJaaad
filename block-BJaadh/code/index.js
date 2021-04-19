// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.indexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
let newString = strings.join(' ');
// - Add two new words in the strings array "called" and "sentance"
strings.push("called");
strings.push("sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
let newString = strings.join(' ');
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
let search =[];
strings.forEach(findis)
function findis(item){
if(item.includes('is'))
{
  search.push(item);
}
}
console.log(search);
// - Find all the words that contain 'is' use string method 'indexOf'
let search =[];
strings.forEach(findis)
function findis(item){
if(item.indexOf('is')!== -1)
{
  search.push(item);
}
}
console.log(search);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let numcheck = [];
numbers.forEach(divby3)
function divby3(item){
if(item%3 ===0)
{
  numcheck.push(item)
}
}
console.log(numcheck);
// -  Sort Array from smallest to largest
numbers.sort(arrange);
function arrange(a,b){
return a-b;
}
console.log(numbers);
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
let large =0;
numbers.forEach(largest)
function largest(item,index)
{
if(item>large)
{
  large = item;
}
}
console.log(large);
// - Find longest string in strings
let long =0;
let longest_word;
strings.forEach(longest)
function longest(item){
if(item.length > long)
{
  long = item.length;
  longest_word = item;
}
}
console.log(longest_word);
// - Find all the even numbers
let evenArr = [];
numbers.forEach(findEven)
function findEven(item){
  if(item%2===0)
  {
   evenArr.push(item);
  }
}
console.log(evenArr);

// - Find all the odd numbers
let oddArr = [];
numbers.forEach(findOdd)
function findOdd(item){
  if(item%2!==0)
  {
   oddArr.push(item);
  }
}
console.log(oddArr);
// - Place a new word at the start of the array use (unshift)
strings.unshift('Yo!');
// - Make a subset of numbers array [18,9,7,11]
let subArr =[];
numbers.forEach(subset)
function subset(item){
  if(item ===18 ||item ===9 ||item ===7 ||item ===11)
  {
    subArr.push(item);
  }
}
console.log(subArr);
// - Make a subset of strings array ['a','collection']
let subArr =[];
strings.forEach(subset)
function subset(item){
  if(item ==="a"||item ==="collection")
  {
    subArr.push(item);
  }
}
console.log(subArr);
// - Replace 12 & 18 with 1221 and 1881
let newArr =[];
numbers.forEach(replacei)
function replacei (item){
  newArr.push(item);
if (item === 12)
{
  item = 1221;
  newArr.push(item);
}
else if (item === 18)
{
  item = 1881;
  newArr.push(item);
}
}
console.log(newArr);
// - Replace words in strings array with the length of the word
let newArr =[];
strings.forEach(replacement)
function replacement(item){
item = item.length;
newArr.push(item);
}
// - Find the sum of the length of words using above question
let newArr =[];
let sum =0;
strings.forEach(replacement)
function replacement(item){
item = item.length;
sum = sum + item;
}
console.log(sum);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.forEach(findJ)
function findJ(item)
{
  if(item.firstname[0]==="J")
  {
    console.log(item.firstname);
  }
}
// - Create new array with only first name
let name =[]
customers.forEach(findJ)
function findJ(item)
{
  name.push(item.firstname);
}
console.log(name);
// - Create new array with all the full names (ex: "Joe Blogs")
let name =[]
customers.forEach(findJ)
function findJ(item)
{
  name.push(item.firstname +" "+ item.lastname);
}
console.log(name);
// - Sort the array created above alphabetically
name.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
customers.forEach(vowel_check)
function vowel_check(item){
if(item.firstname.includes('a') || item.firstname.includes('e')||item.firstname.includes('i') || item.firstname.includes('o') || item.firstname.includes('u'))
{
  console.log(item.firstname);
}
}