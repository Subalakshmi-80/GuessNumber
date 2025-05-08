// selecting Elements
var inputBox=document.getElementById("inputBox")
var result=document.getElementById("result")
var guess=document.getElementById("guess")
var count=3
// Generate Random Number from 1 to 5
var randomNumber=Math.floor(Math.random()*10)+1  // 1 to 10
if(randomNumber>5)
{
    randomNumber = randomNumber-5
}

function check(){
   
        if(inputBox.value==randomNumber){
            result.textContent="You are Right!"
            alert("You Got it Right,Congratulation")
        }
        else{
            count=count-1
            if(count==0){
                alert("You Lost! Generated Random Number: "+randomNumber)
            }
            result.textContent="You are Wrong!"
            guess.textContent="Available Guesses: "+count
        }    
    
}