let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user_score');
const compScore_span = document.getElementById('comp_score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = user + ' beats ' + comp + '. You win!';
}

function lose(user, comp) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = comp + ' beats ' + user + '. You lose!';
}

function draw(user, comp) {

}

function getCompChoice() {
  const choices = ['r', 'p', 's'];
  return choices[Math.floor(Math.random() * 3)]
}

function game(user_choice) {
  const comp_choice = getCompChoice();
  switch(user_choice + comp_choice) {
    case "rs":
    case "sp":
    case "pr":
      win(user_choice, comp_choice);
      break;
    case "sr":
    case "ps":
    case "rp":
      lose(user_choice, comp_choice);
      break;
    default:
      draw(user_choice, comp_choice);
      break;
  }

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
