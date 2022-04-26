var student = { 
    name:'radhe',
          age:22,
          gender: 'M'
};

for (var key in student) { 
    let value;


    value = student[key];

    console.log(key + " - " +  value); 
} 
          

          //2
          var str="edstem";
          var count=0;
          var object = {};
          for(var i=0;i=str.length;i++){
              if(!object[str[i]])
              {
                  object[str[i]]==count;
              }
                  else{
                      object[str[i]]= count +1;
                  }
              }
          for(let key in object){
              console.log(key+"-"+object[key]);
          }
        //3
           var database = [ { name: 'vicky', phone_no:9947507132},
           { name: 'anu', phone_no:9947507134},
           { name: 'anisha', phone_no:9947507135}]
           for(i=0;i<database.length;i++) {
           if(database[i].name==='vicky')
           {
               console.log(database[i].phone_no);
           }
        }
        
          //4

          
          var array = [10, 20, 30, 10, 40, -2]
          function uniqueArray(value){
              var uniqueArray=[];
              for(var i=0; i<value.length; i++){
                  if(uniqueArray.indexOf(value[i])===-1){
                      uniqueArray.push(value[i]);
                  }
          }
          return uniqueArray;
        }
        console.log(uniqueArray(array));
          //5
       var string1='end';
       var string2='den';
       var n1=string1.length;
       var n2=string2.length;
       if(n1!=n2){
           console.log('false')
       }
       let a= string1.split('').sort().join('');
       let b= string2.split('').sort().join('');
       if(a==b){
           console.log('true')
       }else{
           console.log('false')
       }
          //6
          var database = [ { name: 'vicky', age: 24, married: false, address: { city: 'hyderabad', state: 'andhra', pincode: '516003' },
           skills: ['react', 'html', 'nodejs'], experience: 2 }, 
           { name: 'nirmal', age: 20, married: true, address: { city: 'hyderabad', state: 'telengana', pincode: '500004' },
            skills: ['css', 'figma'], experience: 4 }, 
            { name: 'neeraj', age: 26, married: false, address: { city: 'bengaluru', state: 'karnataka', pincode: '510006' }, 
            skills: ['aws', 'angular', 'nodejs'], experience: 5 } ]
            //console.log(database)
            for(var i=0; i<database.length;i++)
            {
                if(database[i].age<=20){
                    console.log(database[i].name)
                }
            }