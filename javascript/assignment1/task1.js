//Print your name, age, Marital Status by storing them in different variables

let name = "Anisha Ravi";
let age = 26;
let maritalStatus = "Single";
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Marital Status: ${maritalStatus}`);

//Define 3 variables to store your gender, height (in inches ), non-veg (food preference)
let gender = "female";
let heightInInches = 60;
let foodPreference = "Non-Veg";
console.log(typeof(gender));
console.log(typeof(heightInInches));
console.log(typeof(foodPreference));

//Given the year of birth of a person, calculate his/her age (You can store the current year in a variable)
var yearOfBirth = 1995;
var currentYear = 2022;
var ageOfThePerson = currentYear - yearOfBirth;

console.log(`Age: ${ageOfThePerson}`);
//Given the 3 subjects marks of a particular student calculate the total marks obtained
var subject1=25;
var subject2=30;
var subject3=40;
var total= subject1+subject2+subject3;
console.log(`Student got ${total} marks in total`);

//Given the sides of a rectangle print the perimeter and area
var length=2;
var width=3;
var perimeter=2*(length+width);
console.log(`perimeter ${perimeter}`);
var area=(length+width);
console.log(`area ${area}`);

//Given a number of total months find the number of months remaining after converting the total months to years
var totalMonlths =23;
var remainingMonlths=23%12;
console.log(`remainingMonlths ${remainingMonlths}`);
//Given the Principal Amount, Interest Percentage and Time calculate the simple interest amount

var PrincipalAmount=25000;
var InterestPercentage=8;
var year = 2;
var simpleInterestamount=(PrincipalAmount*InterestPercentage*year);
console.log(`simpleInterestamount ${simpleInterestamount}`);
//Given the marks of 6 students in a class calculate their average marks
var student1=30;
var student2=35;
var student3=40;
var student4=41;
var student5=42;
var student6=43;
var average=(student1+student2+student3+student4+student5+student6)/6;
console.log(`Average ${average}`);
//Given 3 product prices and their quantity calculate the total amount of items in the cart
var productprices1=100;
var quantityofproduct1=2;
var productprices2=200;
var quantityofproduct2=4;
var productprices3=300;
var quantityofproduct3=6;
var totalamount=(productprices1*quantityofproduct1)+(productprices2*quantityofproduct2)+(productprices3*quantityofproduct3);
console.log(`Total Amount ${totalamount}`);
//Given the item prices and quantity along with tax, discount and tip calculator the total bill amount
var itemprice1=200;
var quantity1=2;
var itemprice2=400;
var quantity2=5;
var taxPercentage=10;
var discountPercentage=15;
var tipPercentage=30;
var grosstotal=(itemprice1*quantity1)+(itemprice2*quantity2);
console.log(`GrossTotal ${grosstotal}`);
var netTotal =
  grosstotal *
  [(100 + taxPercentage) / 100] *
  [(100 - discountPercentage) / 100] *
  [(100 + tipPercentage) / 100];
  console.log(`NetTotal ${netTotal}`);