let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map(findname)
function findname(item)
{
  return item.name;
}
console.log(peopleName);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(findgrade)
function findgrade(item)
{
  return item.grade;
}
console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map(findsex)
function findsex(item)
{
  return item.sex;
}
console.log(peopleSex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let namewithjp = peopleName.filter(find)
function find(item)
{
  if(item.startsWith('J') ||item.startsWith('P'))
  {
    return item;
  }
}
console.log(namewithjp);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
peopleName.forEach(find)
function find(item)
{
  if(item.startsWith('A') ||item.startsWith('C'))
  {
    console.log(item.length);
  }
}
// Log all the filtered male ('M') in persons array
let allMales = persons.filter(findmale)
function findmale(item)
{
  if(item.sex === "M")
  {
    return item;
  }
}
console.log(allMales);
// Log all the filtered female ('F') in persons array
let allfeMales = persons.filter(findfemale)
function findfemale(item)
{
  if(item.sex === "F")
  {
    return item;
  }
}
console.log(allfeMales);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
allfeMales.forEach(namestarts)
function namestarts(item)
{
  if(item.name.startsWith('C')||item.name.startsWith('J'))
  {
    console.log(item);
  }
}
// Log all the even numbers from peopleGrade array
peopleGrade.forEach(even)
function even(item)
{
  if(item%2==0)
  {
    console.log(item);
  }
}
// Find the first name that starts with 'J' in persons array and log the object
let count = 0;
persons.forEach(find)
function find(item){
  if(item.name.startsWith('J'))
  {
    count = count +1;
    if(count===1)
  {
    console.log(item);
  }
  }
}
// Find the first name that starts with 'P' in persons array and log the object
let count = 0;
persons.forEach(find)
function find(item){
  if(item.name.startsWith('P'))
  {
    count = count +1;
    if(count===1)
  {
    console.log(item);
  }
  }
}
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let count = 0;
persons.forEach(find)
function find(item){
  if(item.name.startsWith('J') && item.grade >10 && item.sex ==="F")
  {
    count = count +1;
    if(count===1)
  {
    console.log(item);
  }
  }
}
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(feMales)

function feMales(item)
{
  if(item.sex === 'F')
  {
    return item;
  }
}
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(males)
function males(item)
{
  if(item.sex === 'M')
  {
    return item;
  }
}
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let gradeTotal =0;
peopleGrade.forEach(total)
function total(item)
{
  gradeTotal = gradeTotal + item;
}
console.log(gradeTotal);
// Find the average grade
let gradeTotal =0;
peopleGrade.forEach(total)
function total(item)
{
  gradeTotal = gradeTotal + item;
}
console.log(gradeTotal/peopleGrade.length);
// Find the average grade of male
let sum =0;
let totalmales =0;
persons.forEach(avg)
function avg(item)
{
if(item.sex ==='M')
{
  sum = sum + item.grade;
  totalmales =totalmales + 1;
}
}
console.log(sum/totalmales);
// Find the average grade of female
let sum =0;
let totalmales =0;
persons.forEach(avg)
function avg(item)
{
if(item.sex ==='F')
{
  sum = sum + item.grade;
  totalmales =totalmales + 1;
}
}
console.log(sum/totalmales);
// Find the highest grade
let malegradesort = peopleGrade.sort(arrange)
function arrange(a,b)
{
  return a-b;
}
console.log(malegradesort);
let highest = malegradesort[malegradesort.length -1];
console.log(highest);
// Find the highest grade in male
let high =0;
persons.forEach(highest_grade)
function highest_grade(item)
{
if(item.sex ==='M')
{
  if(item.grade > high)
  {
    high = item.grade;
  }
}
}
console.log(high);
// Find the highest grade in female
let high =0;
persons.forEach(highest_grade)
function highest_grade(item)
{
if(item.sex ==='F')
{
  if(item.grade > high)
  {
    high = item.grade;
  }
}
}
console.log(high);
// Find the highest grade for people whose name starts with 'J' or 'P'
let high =0;
persons.forEach(highest_grade)
function highest_grade(item)
{
if(item.name.startsWith('J')||item.name.startsWith('P'))
{
  if(item.grade > high)
  {
    high = item.grade;
  }
}
}
console.log(high);
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort(ascend)
function ascend(a,b)
{
  return a -b;
}
console.log(peopleGrade);
// Sort the peopleGrade in descending order
peopleGrade.sort(ascend)
function ascend(a,b)
{
  return b-a;
}
console.log(peopleGrade);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort(ascend)
function ascend(a,b)
{
  return b-a;
}
console.log([...peopleGrade]);
// Sort the array peopelName in ascending `ABCD..Za....z`
let peopleName = persons.map(findname)
function findname(item)
{
  return item.name;
}
console.log(peopleName);
peopleName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort();