/* Requirements
  @name isString
  @parameter (any value) val
  @return Boolean
*/

// your code goes here
function isString(item)
{
  item = Boolean(item);
  return item;
}
// Test
console.log(isString('tony stark')); // true;
console.log(isString([1, 2, 4, 0])); // false;


/* Requirements
  @name isBlank
  @parameter (any value) val
  @return Boolean
*/

// your code goes here
function isBlank(input)
{
if(input.length===0)
{
return true;
}
else return false;
}
// Test
console.log(isBlank('')); // true;
console.log(isBlank('abc')); // false;


/* Requirements
  @name stringToArray
  @parameter (string) text
  @return Array
*/

// your code goes here
let newArr = [];
function stringToArray(input)
{
  newArr = input.split(' ');
   return newArr;
}
// Test
console.log(stringToArray('Hello World')); // ["Hello", "World"];
console.log(stringToArray('Lady Bird')); // ["Lady", "Bird"];

/* Requirements
  @name truncate
  @parameter (string, number) text, len
  @return String
*/
// your code goes here
function truncate(input, num){
  let final = input.slice(0,num);
  return final;
}

// Test
console.log(truncate('John Snow', 4)); // "John";

/* Requirements
  @name abbrevName
  @parameter (string) fullName
  @return String
*/

// your code goes here
function abbrevName(input)
{
for(let i=0; i<input.length; i++)
{
  if(input[i]===' ')
  {
    input = input.slice(0,i+2)
    console.log(input + '.');
  }
}  
}
abbrevName('Robin Singh')
console.log(abbrevName('Jon Snow'));
// Test
console.log(abbrevName('Robin Singh')); //"Robin S."
console.log(abbrevName('John Snow')); //"John S."

/* Requirements
  @name protect
  @parameter (string) email
  @return String
*/

// your code goes here
let index =0;
let final;
function protect(input)
{
for(let i=0; i<input.length; i++)
{
while(input[i]!='@')
{
  console.log(input);
}
}
}  
console.log(protect('johnS@example.com'));
// Test
console.log(protect('johnS@example.com')); // "john...@example.com"
console.log(protect('arya_stark@example.com')); // "arya...@example.com"

/* Requirements
  @name protectAgain
  @parameter (string) email
  @return String
*/

// your code goes here

// Test
console.log(protect('johnS@example.com')); // "john.@example.com"
console.log(protect('arya_stark@example.com')); // "arya......@example.com"


/* Requirements
  @name parameterize
  @parameter (string) str
  @return String
*/

// your code goes here
function parameterize(input)
{
  input = input.toLowerCase();
  for(let i =0; i<input.length; i++)
  {
    if(input[i]===' ')
    {
      input = input.replace(input[i], "-")
    }
  }
  return input;
}
console.log(parameterize('John Snow from Winterfell')); // "john-snow-from-winterfell"
console.log(parameterize('Arya Stark from Winterfell')); // "arya-stark-from-winterfell"

/* Requirements
@name capitalizeFirst
@parameter (string, number) text, len
@return String
*/

// your code goes here
function capitalizeFirst(input)
{
  let x= input[0].toUpperCase();
  input = input.replace(input[0], x)
  return input;
}
// Test
console.log(capitalizeFirst('we are learning')); // "We are learning"
console.log(capitalizeFirst('learning Javascript')); // "Learning Javascript"

/* Requirements
  @name capitalizeWords
  @parameter (string) text
  @return String
*/

// your code goes here
let newArr =[];
let final;
function capitalizeWords(input)
{
  newArr = input.split(' ');
  for(let i=0; i<newArr.length; i++)
  {
    let replay = newArr[i];
    let x = replay[0].toUpperCase();
    replay = replay.replace(replay[0],x);
    newArr[i] = replay;
  }
  let final = newArr.join(" ")
  return final;
}
console.log(final);
// Test
console.log(capitalizeWords('we are learning')); // "We Are Learning"
console.log(capitalizeWords('learning javascript')); // "Learnign Javascript"


/* Requirements
  @name swapcase
  @parameter (string) text
  @return String
*/

// your code goes here
let final="";
function swapcase(item)
{
  for(let i=0; i<item.length; i++)
  {
    if(item[i] === item[i].toUpperCase())
    {
      final += item[i].toLowerCase();
    }
    else
    {
      final += item[i].toUpperCase();
    }
  }
  return final;
}console.log(swapcase('AaBbc')); 
// Tets
console.log(swapcase('AaBbc')); // "aAbBC"
console.log(swapcase('abcDef')); // "ABCdEF"


/* Requirements
  @name camelize
  @parameter (string) text
  @return String
*/
// your code goes here
let x = camelize('hello world');
function camelize(item){
  let newitem = item.split(" ");
  for(let i=0; i<newitem.length; i++)
  {
    if(i===1)
    {
      for(let z=0; z<newitem[i].length; z++)
      {
       console.log();
      }
    }
  }
  return newitem;
}
console.log(camelize('hello world'));
// Test
console.log(camelize('hello world')); // "helloWorld"
console.log(camelize('main exercise')); // "mainExercise"
