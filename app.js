const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById('user_score');
const compScore_span = document.getElementById('comp_score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function win() {}

function lose() {}

function draw() {}

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
      win();
      break;
    case "sr":
    case "ps":
    case "rp":
      lose();
      break;
    default:
      draw();
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
