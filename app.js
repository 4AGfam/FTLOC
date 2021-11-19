'use strict'


function createGreeting(){
  let userName = getUserName();
  let greeting = monthOfYear();
  document.write(greeting + userName + "!");
 }

 function getUserName(){
  let userName = prompt("What is your name?");
  return userName;
}

//if(userName.toLowerCase() == (userName)){
//     alert(userName)
//} else{
//    alert("Happy Holidays "+ (userName));
//}

function monthOfYear(){
let currentMonth = prompt("What is the current month?(1-12)");
let greeting = "";
if(currentMonth >= 11 && currentMonth <= 12){
  greeting = "Merry Christmas ";
  alert(greeting) 
} else if(currentMonth >= 8 && currentMonth <= 10){
  greeting = "It's so close to Christmas I can taste the Egg Nog ";
  alert(greeting)
} else if(currentMonth > 0) {
  greeting = "Is it Christmas yet ";
  alert(greeting)
} else {
  greeting = "All Jolly, All the Time ";
  alert(greeting)
}

  return greeting;
}

function paragraphText(){
  let answer = ageOfUser();
  return answer;
}

//function ageOfUser(){
//let currentAge = prompt("How old are??");
//let answer = "";
//if(currentAge >= 20 && currentAge <= 200){
//  answer = "No more freebies for you. But on the bright side you can still watch an awesome movie!";
//  alert(answer) 
//} else if(currentAge >= 13 && currentAge <= 19){
//  answer = "Enjoy the freebies while they last and check out a movie!";
//  alert(answer)
//} else if(currentAge > 0) {
//  answer = "Don't forget to make that Christmas list. Maybe a good movie will give you some ideas!";
//  alert(answer)
//} else {
//  answer = "You must be ancient like Santa
//  Claus!!!";
//  alert(answer)
//}

//return answer;
//}

function displayStars(){
  let number = prompt("how many stars do you give this website?");
  for(let star = 1; star <= number; star++ ){
      document.write('<img src="https://d29fhpw069ctt2.cloudfront.net/clipart/102879/preview/1329328727_preview_8991.png"/>');
  }
}
//document.write("Hello " + userName.toUpperCase() + "!");