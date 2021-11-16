'use strict'

let userName = prompt("What is your name?");

console.log(userName);

if(userName.toLowerCase() == (userName)){
     alert(userName)
} else{
    alert("Happy Holidays "+ (userName));
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
} else {
  greeting = "All Jolly, All the Time!";
  alert(greeting)
}

let age = prompt("How old are??");
let answer = "";

if(currentMonth >= 20 && currentMonth <= 200){
  answer = "No more freebies for you. But on the bright side you can still watch an awesome movie!";
  alert(answer) 
} else if(currentMonth >= 13 && currentMonth <= 19){
  answer = "Enjoy the freebies while they last and check out a movie!";
  alert(answer)
} else if(currentMonth > 0) {
  answer = "Don't forget to make that Christmas list. Maybe a good movie will give you some ideas!";
  alert(answer)
} else {
  answer = "You must be ancient like Santa Claus!!!";
  alert(greeting)
}

document.write("Hello " + userName.toUpperCase() + "!");