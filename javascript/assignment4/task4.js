//Given an array of strings count all the vowel characters
//Sample Input - [‘edstem’, ‘react’, ‘javascript’, ‘html’, ‘css’ ]
//Sample Output - 7


var str = ['edstem', 'react', 'javascript', 'html', 'css'];
var count = 0;
for(var i=0;i<str.length;i++){
    for(var j=0;j<str[i].length;j++){
        if(str[i][j]==='a' || str[i][j]=='e' || str[i][j]=='i' || 
           str[i][j]=='o' || str[i][j]=='u' |str[i][j] === "A" ||str[i][j] === "E" ||str[i][j] === "I" ||str[i][j] === "O" ||str[i][j] === "U") {
         count++;
           }
        }
    }

console.log(count);
//  2
//Given a string print "YES" if it is a palindrome "NO" if it is not one
//A palindrome is a word which reads the same backward as forward
var string='malayalam'
len=string.length
for (let i = 0; i < len / 2; i++) {

    
    if (string[i] !== string[len - 1 - i]) {
        console.log ('no')

}
else{
console.log('yes')
}
}
    
//Given an array of marks, find out the Average
////Sample Input: [95, 86, 66, 94, 58]
var array= [95, 86, 66, 94, 58]
var total=(array[0]+array[1]+array[2]+array[3]+array[4])

var avg =total/5
console.log(avg)
//Given an array of strings, remove all the odd length strings from it
//Sample Input: [‘edstem’, ‘react’, ‘html’, ‘foodie’, ‘coder’’  ]
//Sample Output: [ ‘edstem’, ‘html’, ‘foodie’ ]
//4
var str = ['edstem', 'react', 'html', 'foodie', 'coder'];
  var arr=[];
    for (var i = 0; i < str.length(); i++) {
  
        
        if (str.length[i]% 2 == 0) {
           arr.push[i]
        }
        console.log(arr)
        }
        //Given an array of numbers, change the multiples of 3 to ‘multiple’
//Sample Input: [5, 9, 8, 12, 22, 18]
//Sample Output: [5, ‘multiple’, 8, ‘multiple’, 22, ‘multiple’ ]
 
var num =  [5, 9, 8, 12, 22, 18];
for(var i=0;i<num.length;i++){
    if(num[i]%3==0)
  {
console.log(num[i])
  }
}
//Given an empty array fill that array with first 10 natural numbers
//Sample Input: []
//Sample Output: [1,2,3,4,5,6,7,8,9,10]
var array = [];
for(var i=1;i<=10;i++)
{
     array.push(i);
    }
console.log(array);
// question 7
var array = [];
var word = '';
var str = "coding is easy";
for(var i=0;i<str.length;i++){
    if(str[i]==' '){
        array.push(word);
        word = '';
    }
    else{
        word = word+str[i];
    }
}
array.push(word);
console.log(array);
    
//question 8
var string=EDSTEM;
for(var i=0;i<string.length;i++)
{
   if(i%2 !== 0)
    {
        console.log(string[i]);
   }
}

//assignment9
var str='edstem technologies in kerala'
var count= 1;
for(var i=0;i<str.length;i++){
    if(str[i]==''){
        count = count+1;

    }
}
console.log('number of words"${str}": ${count}');
//assignment 10
var arr =['react','html','edstem'];
var str='edstem';

var count=0;
for(var i=0;i<=arr.length;i++){
    if(arr[i]==str){
        count +=1;
    }
}
if(count>0){
    console.log('yes');

}
else
{
    console.log('no');
}


