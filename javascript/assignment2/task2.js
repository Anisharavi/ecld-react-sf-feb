/// If the given year is a leap year print "LEAP YEAR" and if it's not a leap year print 
var year=2014;
if (year % 400 == 0) {

   console.log('year is leap')
}
else if (year % 100 == 0) {
    console.log('year is not leap')
}
else if (year % 4 == 0) {

    console.log('year is  leap')
}
else {
    console.log(' not a leap year');
}
//  In India, a person can vote if he crosses 18years of age. Give a person year of birth print "YES" if he can vote otherwise print "NO"

var birth=2006;
if (birth<2004) {
  console.log('can vote')
 }
 else{
     console.log('not vote')
 }
 //Give a single character (small or upper case) if it is a Vowel print "V" in the case of consonant print "C"
 var char = "i";

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u" ||
  char === "A" ||
  char === "E" ||
  char === "I" ||
  char === "O" ||
  char === "U"
) {
  console.log("v");
} else {
  console.log("c");
}
//Give a string of PIN Code (with all digits) print "VALID" or "INVALID" (a PIN code is only valid if it has 6 digits)
let pincode = 67332;

if (pincode.length == 6) {
  console.log("VALID");
}
else {
  console.log("INVALID");
}
//Based on the state print the region it belongs to "EAST", "WEST", "NORTH", "SOUTH"
var state = "Punjab";

if(state == 'Jammu & Kashmir'|| state == 'Himachal Pradesh' ||

   state == 'Punjab' || state == 'Uttarakhand' || state == 'Haryana' ||

   state == 'Delhi' || state == 'Rajasthan' || state == 'Uttar Pradesh'){

       console.log("State is in NORTH");

   }

else if(state == 'Bihar' || state == 'Jharkhand' || state == 'Odisha' ||

        state == 'West Bengal'){

            console.log("State is in EAST");

        }

else if(state == 'Andhra Pradesh' || state == 'Karnataka' ||

        state == 'Kerala' || state == 'Tamil Nadu' || state == 'Telangana'){

        console.log("State is in SOUTH");

        }

else{

    console.log("State is in WEST")
}
//Given a number print if it is either "EVEN" or "ODD" (Use ternary Operators)
var num = 2004;
var result = num % 2 == 0 ? "EVEN" : "ODD";

console.log(result);
//Given two numbers a, b Print the below statements based on the condition
//"A > B"
//"A < B"
//"A = B" Note: Use Ternary Operators
var A = 20;
var B = 9;

var result = A > B ? "A > B" : A < B ? "A < B" : "A = B";

console.log(result);

//Given the shirt size code "S", "M", "L", "XL" print the corresponding names "Small", "Medium", "Large", "Extra Large", "None" (For not a valid code)
var size="S"

if (size === "S") 
{
  console.log("small");
} 
else if (size === "M")
 {
  console.log("medium");
}
 else if (size === "L") 
 {
  console.log("large");
} else if ((size === "XL"))

 {
  console.log("extra Large");
} else
 {
  console.log("invalid");
}