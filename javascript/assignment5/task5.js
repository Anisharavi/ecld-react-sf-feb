////question 1
var sample=['html','css','java','js']
//console.log(sample[3])
let text = sample.join();
console.log(text)
//2
var string = "The best both worlds";  
    var count = 0;  
      
     
    for(var i = 0; i < string.length; i++) {  
        if(string[i] != ' ')  
            count++;  
    }  
    console.log(count)
    //3
    var nmbs = [100, 20, 31, 150, 39, 72]
    min = nmbs[0], 
    max = nmbs[0];

for(i in nmbs){
    
    if(nmbs[i] > max){
        max = nmbs[i];
    }
    if(nmbs[i] < min){
        min = nmbs[i];
    }
}
console.log(max)
console.log(min)
//4
var temp=
[
    [1, 2, 3],
     [4, 5, 6], 
     [7, 8, 9],
]
var row=temp.length
var col=temp[0].length
console.log(row)
console.log(col)
//5
var n=
[
  [1, 2, 3],
   [4, 5, 6], 
     [7, 8, 9],
]
for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n[i].length; j++) {
       if(i==j)
{


    console.log(n[i][j])
}
}
}
// 6
var temp=['assignment','problem','media','upload']
console.log(temp[0])
console.log(temp[2])
//7
var array= ['edstem','tech'];

var str='';
for (var i=0;i<array.length-1;i++)
{
    str= str+array[i]+'_';
}
str = str+array[1];
console.log(str)

//8
var n = [[1, 2, 3],
              [4, 5, 6],
              [7,  8, 9]]
var sum1 = 0
var sum2 = 0
var diff
for(var i=0;i<n.length;i++){
    for(var j=0;j<n[i].length;j++){
        if(i==j){
            sum1 = sum1 + n[i][j]
        }
        if(i+j == 2){
            sum2 = sum2 + n[i][j]
        }
    }
}
diff = sum1 - sum2
console.log("First Diag -> 1+5+9 -> "+sum1)
console.log("Second Diag -> 3+5+7 -> "+sum2)
console.log("Diff => "+diff);
//9
var temp=
[
    [2,3,4]

]
var product=0
for(var i=0;i<temp.length;i++)
{
    product = product * temp[i]
}
console.log(product)
//10

var temp1=
[
    [1, 2, 3],
    [4, 5, 6],
    [7,  8, 9]


]
console.log(temp1[0][1])
console.log(temp1[1][1])
console.log(temp1[2][1])
    

    
