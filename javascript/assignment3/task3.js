//Define a variable count Print your name using while loop the no of times the value assigned to the variable count
var i =4;
while(i<6)
{
    console.log('anisha')
    i=i+1;
}
//Define a variable limit Print your name using for loop the no of times the value assigned to the variable limit
var i=4;
for(i=0;i<=6;i++)
{
    console.log('anisha')
    i=i+1;
}
//Using a while loop print the numbers in descending order from the given starting to ending limit. Start - 20 End - 25


var start = 20;
var end = 25;

while (end >= start) {
  console.log(end);
  end--;
}
//Given a starting number and a decrement value, print all numbers from the starting number till zero deducting the decrement value each time. Starting - 13, Decrement - 4



var start = 28
var limit = 5
for (var i = start; i > 0; i -= limit){
    console.log(i);
 }

// Print the average of all the numbers from 1 to given limit



var sum = 0;
 

 for (let i = 1; i <=100; i++) {
   sum += i;
 }

var average = sum / 100;

console.log(`average of first  numbers is ${average}`);

// Find out the average of the first 100 n natural numbers using for loop.

var i = 1;
var sum = 0;

while (i <= 100) {
  sum += i;
  i++;
}

var average = sum / 100;

console.log(`Average of  100 Natural Numbers is ${average}`);

// Print all the multiples of 3 till 100 using for loop

for (let i = 3; i <= 100; i += 3){
    console.log(i);
}
console.log("The Multiples of 3");
// Given a string print all the consonants which are not a,e,i,o,u using for loop.

var string = "ANIhsA";

for (i = 0; i < string.length; i++) {
    if (
        string[i] !== "A" &&
        string[i] !== "E" &&
        string[i] !== "I" &&
        string[i] !== "O" &&
        string[i] !== "U" &&
        string[i] !== "a" &&
        string[i] !== "e" &&
        string[i] !== "i" &&
        string[i] !== "o" &&
        string[i] !== "u"
    )
     {
        console.log(string[i])
    }
  }

// Given a string find out the length of that string

var string = "anisha";

console.log(`Length  ${string.length}`);

// Given a string, print the first character and last character of that string.

var string = "anisha"

console.log(`First letter  ${string[0]}`);
console.log(`Last letter  ${string[string.length-1]}`);

// Given a string print the odd indexes of that string using for loop


var string = "anisha"

for (var i = 1; i < string.length; i = i + 2){
    console.log(string[i]);
}

// Find out the sum of the first 10 natural numbers using for loop

var sum = 0;

for (let i = 0; i < 10; i++) {
  sum +=i;
}
 console.log(`Sum of  natural numbers is ${sum}`)