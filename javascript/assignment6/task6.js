//1
function add(){
    var num1 = 30;
    var num2 = 20;


var sum = num1 + num2;


    console.log(sum);
}

 return add()
 //2
 function difference(){
    var num3 = 12;
    var num4 = 4;
    var num5= 18;

var difference  = num3 - num4;
var difference1 = num5-num4;

    console.log(difference);
    console.log(difference1)
}
return difference()
//3
function oddNumbers(n)
{
    for(var i=0;i<n;i++){
        if(i%2 !== 0)
        {
            console.log(i)
        }
    }
}
oddNumbers(20)
//4
function oddNumbers()
{
    var n=20
    for(var i=0;i<n;i++){
        if(i%2 !== 0)
        {
            console.log(i)
        }
    }
}
return oddNumbers()



//5
function add(){
    var array = [1,2,3,4,5,6,7,8,9,10]
    var avg=0
    var sum=0
    function average()
    {
        for(var i=0;i<array.length;i++){
            sum = sum+arr[i]
        }
            average = sum/array.length
        
    }
    console.log(average)
    return average()

}


//6
var name = 'ANISHA';

console.log(name.toLowerCase());