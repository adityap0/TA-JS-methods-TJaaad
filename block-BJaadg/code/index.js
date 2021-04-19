// After knowing about string methods, practice those by solving problems given below.

let from = 'Syrio Forel';
let quote = 'There is only one thing we say to death: Not today';
let to = 'Arya Stark';

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/
let indexOfIs = quote.indexOf("is");
console.log(indexOfIs);
/*
2. Find the character at the index indexOfIs (Problem 1) in quote.
*/
quote.charAt(indexOfIs);
/*
3. Log the message saying `The index of first is in quote is 7`
*/
console.log(`The index of first is in quote is 7`);
/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/
for(let i=0;i<6;i++)
{
  console.log(`The character at index ${i} is  ${quote.charAt(i)}`);
}
/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/
let say = from.concat(" said ", quote," to ",to);
console.log(say);
/*
6. Does from, to and quote ends with "rk". Check all three.
*/
from.endsWith("rk");
quote.endsWith("rk");
to.endsWith("rk");
/*
7. Does quote includes the word "Only"
*/
quote.includes("Only");
/*
8. Does quote includes the word " we"
*/
quote.includes(" we");
/*
9. Find the index of the the word `we` in quote
*/
quote.indexOf('we');
/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/
let quoteSplitted = quote.split(' ');
/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/
let index = quoteSplitted.indexOf("today");
  quoteSplitted[index] = "tomorrow";
  let split = quoteSplitted.join(' ');
  console.log(split);
/*
12. Find the index of second "o" in quote. Use indexOf
*/
let index = quote.indexOf("o");
if(index !== -1)
{
  index = quote.indexOf("o",index+1);
}
console.log(index);
/*
13. Find the last index of letter "a" in quote.
*/
let last_a = quote.lastIndexOf('a');

/*
14. Find the second last index of letter "a" in quote.
*/
quote.lastIndexOf("a", last_a-1);
/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
*/
let newQuote;
let length=quote.length;
for(let i=length; i<70; i++)
{
  quote = quote + ".";
  length = quote.length;
}
newQuote =quote;
console.log(newQuote);

/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/

/*
17. Log the repeat of "Hello World!" 10 times.
*/
let x ="Hello World!";
for(i=0; i<10; i++)
{
  console.log(x);
}
/*
18. Replace today to tomorrow in quote.
*/
quote.replace('today', 'tomorrow')
/*
19. Replace Stark to Lannister in quoteTo
*/
to.replace('Stark', 'Lannister');
/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
quote = quote.slice(0,30) + '...';
/*
21. Find out does quote, from, to starts with "A"
*/
quote.startsWith('A');
to.startsWith('A');
from.startsWith('A');