////////////////////
////Definitions////
//////////////////

//Define the score variables that will be displayed
let user_Score = 0;
let computer_Score = 0;

//Pull in the ID value for important elements from the HTML code
//Use const as these will values do not change after being defined
const user_Score_span     = document.getElementById("user_score");
const computer_Score_span = document.getElementById("computer_score");
const scoreBoard_div      = document.querySelector(".score-board");
const result_p            = document.querySelector(".result > p");
const rock_div            = document.getElementById("r");
const paper_div           = document.getElementById("p");
const scissors_div        = document.getElementById("s");


//////////////////////////
////Functions-Choices////
////////////////////////

//This is where the JAVASCRIPT starts interacting with teh user, its waiting
//for a click input on one of the three options
//which will be sent to be compared with the randomly generated computers choice
function main() {
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })
  scissors_div.addEventListener('click', function(){
    game("s");
  })
}

//generate a random number between 0 and 3.5 then rounds down, r=0,p=1,s=2
//This function produces the computers 'choice'
function get_computer_Choice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = (Math.floor(Math.random()*3.5));
  return choices[randomNumber];
}

//Converts the shorthand notation of choices to full words for result display
//Both player and computer choices are stored as single letters (r,p,s)
function convertToWord(letter) {
  if (letter === "r") return "Rock"
  if (letter === "p") return "Paper"
  return "Scissors";
}

///////////////////////////
////Functions-Outcomes////
/////////////////////////

//Switch statement that exhausts the win,lose,draw conditions and sends result to following function
function game(user_Choice) {
  const computer_Choice = get_computer_Choice();
  switch (user_Choice + computer_Choice) {
    case "rs":
    case "pr":
    case "sp":
      win(user_Choice, computer_Choice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(user_Choice, computer_Choice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(user_Choice, computer_Choice);
      break;
  }
}

//Win condition, increase users score and update display
function win(user_Choice, computer_Choice) {

  const user_Choice_div = document.getElementById(user_Choice);
  user_Score++;
  user_Score_span.innerHTML = user_Score;
  computer_Score_span.innerHTML = computer_Score;
  //Adds the class green-glow to change the color of the circle around the the option that won
  result_user.innerHTML = convertToWord(user_Choice)
  result_condition.innerHTML = " beats "
  result_computer.innerHTML = convertToWord(computer_Choice)
  result_statement.innerHTML = "You Win!"
  user_Choice_div.classList.add('green-glow');
  //Remove the class green-glow to change color of the circle back to white after 0.5s
  setTimeout(function() { user_Choice_div.classList.remove('green-glow')}, 500);
}

//Same as win function
function lose(user_Choice, computer_Choice) {
  const user_Choice_div = document.getElementById(user_Choice);
  computer_Score++;
  user_Score_span.innerHTML = user_Score;
  computer_Score_span.innerHTML = computer_Score;
  result_user.innerHTML = convertToWord(user_Choice)
  result_condition.innerHTML = " loses to "
  result_computer.innerHTML = convertToWord(computer_Choice)
  result_statement.innerHTML = "You Lose.."
  user_Choice_div.classList.add('red-glow');
  setTimeout(function() { user_Choice_div.classList.remove('red-glow')}, 500);
}

//Same as win & lose function
function draw(user_Choice, computer_Choice) {
  const user_Choice_div = document.getElementById(user_Choice);
  result_user.innerHTML = convertToWord(user_Choice)
  result_condition.innerHTML = " equals "
  result_computer.innerHTML = convertToWord(computer_Choice)
  result_statement.innerHTML = "Its a Draw!"
  user_Choice_div.classList.add('gray-glow');
  setTimeout(function() { user_Choice_div.classList.remove('gray-glow')}, 500);
}


main();
