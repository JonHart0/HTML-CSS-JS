//Initialize the variables for scores
let userScore = 0;
let computerScore = 0;
//Pull in the ID value for important elements from the HTML code
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//generate a random number between 0 and 3.5 then rounds down, r=0,p=1,s=2
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = (Math.floor(Math.random()*3.5));
  return choices[randomNumber];
}

//Converts the shorthand notation of choices to full words
function convertToWord(letter) {
  if (letter === "r") return "Rock"
  if (letter === "p") return "Paper"
  return "Scissors";
}

//Win condition, increase users score and update display
function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  //Update the paragraph in result use `` to remove the need for "" and ++, use ${} to display variables properly
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} , You win!`;
  //Adds the class green-glow to change the color of the circle around the the option that won
  userChoice_div.classList.add('green-glow');
  //Remove the class green-glow to change color of the circle back to white after 0.5s
  setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 500);
}

//Same as win function
function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} , You lost...`;
  userChoice_div.classList.add('red-glow');
  setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 500);
}
//Same as win & lose function
function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} , its a draw.`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(function() { userChoice_div.classList.remove('gray-glow')}, 500);
}

//Switch statement that exhausts the win,lose,draw conditions and sends result to following function
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

//This is where the JAVASCRIPT starts working, its waiting for a click input on one of the three options
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

main();
