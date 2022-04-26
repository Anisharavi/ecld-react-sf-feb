function clickButton()
{
    var input = document.getElementById('age').value
    if(!input)
    {
        alert('Enter Your Age')
    }else if(input > 18){
       var text = document.getElementById('age1')
       text.textContent = "You can drive in India!"
        
     }else if(input == 18){
        var text = document.getElementById('age1')
        text.textContent = "You are just old enough to drive in India!"

     }else{
        var text = document.getElementById('age1')
        text.textContent = "You can't drive in India!"
     }
}