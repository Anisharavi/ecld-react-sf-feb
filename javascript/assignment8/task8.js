//1

var arr = [2,3,5,7,9];
var result = arr.map(x => x ** 2);
console.log(result);
//2

var arr = [1,2];
var result = arr.map(x => x * 2);
console.log(result);
//3

var arr = [1,2,3];
var result = arr.map(x => x % 3==0);
console.log(result);
//4

var array = [2,3,4],
    
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    
    p *= array[i];
    }
console.log('Product :  ' +p);
//4

var array = [2,3,4];

var result = array.reduce(function(ca,el){
    return ca * el;
})
console.log(result); 
//5

var name='html'
console.log(name.length)
//5

var array = ['html','react','java'];

array.map(function(el){
    console.log(`${el} - ${el.length}`);
})
//6
var my_company = ["Edstem","Tech"];
var result = my_company.map(([v])=> v);
console.log(result);
//7
var array=["assignment", "problem", "media", "upload"]
for(var i=0; i<array.length;i++){
    console.log(array[array.length-1]);
    console.log(array[0])
}
//7

//8
var array=["edstem", "tech"]
var str ="";
for(var i=0;i<array.length-1;i++){
    str=str+array[i] + '_';

}

str= str+array[1];
console.log(str)
//8
var array = ["edstem", "tech"];

var string = array.reduce(function(ca,el)
{
    console.log(ca + "_" + el);
})
//9
let user =  { 
    name: 'vishal', 
    age: 22, 
    gender: 'M', 
    skills: [ 'css', 'nodejs'], 
    addSkill: function(skill)
    {
        return this.skills.push(skill)
    }
}
 user.addSkill('html')  
 console.log(user.skills);



