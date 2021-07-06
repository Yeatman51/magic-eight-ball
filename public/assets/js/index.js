let userName = '';
let userQuestion = document.getElementsByClassName('user-question');

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

console.log(userQuestion.value);

userName ? console.log(`Hello ${userName}`) 
: console.log(`Hello`)

console.log(randomNumber);

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;  
  case 2:
    eightBall = 'Reply hazy try again';
    break; 
  case 3:
    eightBall = 'Cannot predict now';
    break; 
  case 4:
    eightBall = 'Do not count on it';
    break; 
  case 5:
    eightBall = 'My sources say no';
    break; 
  case 6:
    eightBall = 'Outlook not so good';
    break; 
  default :
    eightBall = 'Signs point to yes';
}

document.getElementById("eight-ball").innerHTML = eightBall;

console.log(`The eight ball answered: ${eightBall}`);