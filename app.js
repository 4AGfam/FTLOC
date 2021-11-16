'use strict'

let userName = prompt("What is your name?");

console.log(userName);

if(userName.toLowerCase() == (userName)){
     alert(userName)
} else{
    alert("Happy Holidays "+ userName);
}

let currentMonth = prompt("What is the current month?(1-12)");
let greeting = "";

if(currentMonth >= 11 && currentMonth <= 12){
  greeting = "Merry Christmas All!";
  alert(greeting) 
} else if(currentMonth >= 8 && currentMonth <= 10){
  greeting = "It's so close to Christmas I can taste the Egg Nog!";
  alert(greeting)
} else if(currentMonth > 0) {
  greeting = "Is it Christmas yet?!";
  alert(greeting)
}else {
  greeting = "All Jolly, All the Time!";
  alert(greeting)
}



document.write("Hello " + userName.toUpperCase() + "!");