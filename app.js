let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user_score');
const compScore_span = document.getElementById('comp_score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function convertLetter(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  if (letter === 's') return 'Scissors';
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = convertLetter(user) + ' beats ' + convertLetter(comp) + '. You win!';
}

function lose(user, comp) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `Rank beats ${convertLetter(user)}. You lose!`;
  document.getElementById(user).classList.add('red_glow');
  setTimeout(function() {document.getElementById(user).classList.remove('red_glow');}, 600);
}

function draw(user, comp) {

}

function getCompChoice() {
  const choices = ['r', 'p', 's'];
  return choices[Math.floor(Math.random() * 3)]
}

function game(user_choice) {
  const comp_choice = getCompChoice();
  lose(user_choice, "")
  // switch(user_choice + comp_choice) {
  //   case "rs":
  //   case "sp":
  //   case "pr":
  //     win(user_choice, comp_choice);
  //     break;
  //   case "sr":
  //   case "ps":
  //   case "rp":
  //     lose(user_choice, comp_choice);
  //     break;
  //   default:
  //     draw(user_choice, comp_choice);
  //     break;
  // }

}

function main () {
  rock_div.addEventListener('click', function() {
    game('r');
  })

  paper_div.addEventListener('click', function() {
    game('p');
  })

  scissors_div.addEventListener('click', function() {
    game('s');
  })

}

main();
