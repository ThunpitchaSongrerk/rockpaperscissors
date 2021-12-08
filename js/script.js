let computerChoiceNum = ["rock", "paper", "scissors"];
let totalWins = 0;
let totalTies = 0;
let totalLoses = 0;
let totalGames = 0;
let winRate = totalWins / totalGames;


// Thunpitcha's function
// Docs: https://docs.google.com/document/d/1gq7oUif59sKDInbJrDTIeSQBaOlGb5ri06b2-noWWNI/edit#heading=h.x4lnrrw34ze2
function getRandomComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  let choice;

  if (randomNumber === 0) {
    choice = "rock";
  } else if (randomNumber === 1) {
    choice = "scissors";
  } else {
    choice = "paper";
  }

  return choice; // value = "rock", "paper", "scissors"
}

$(".clear").click(function() {
  $(".input").val("");
  $(".userChoice").text("");
  $(".result").text("");
  $(".computerChoice").text("");
});

$(".play").click(function() {

  let result;
  totalGames = totalGames + 1;

  let choices = getRandomComputerChoice();

  let user_choice = $(".input").val();

  $(".userChoice").text(user_choice);

  user_choice = user_choice.toLowerCase();

  $(".computerChoice").text(choices);

  if (user_choice == "rock" && choices == "scissors") {
    result = "You Won!";
  } else if (user_choice == "rock" && choices == "rock") {
    result = "You Tied!";
  } else if (user_choice == "rock" && choices == "paper") {
    result = "You Lost!";
  } else if (user_choice == "paper" && choices == "rock") {
    result = "You Won!";
  } else if (user_choice == "paper" && choices == "scissors") {
    result = "You Lost!";
  } else if (user_choice == "paper" && choices == "paper") {
    result = "You Tied!";
  } else if (user_choice == "scissors" && choices == "scissors") {
    result = "You Tied!";
  } else if (user_choice == "scissors" && choices == "rock") {
    result = "You Lost!";
  } else if (user_choice == "scissors" && choices == "paper") {
    result = "You Won!";
  } else {
    $(".result").append(`<p>Your input is invalid, try again.<p>`);
  }
  
  for (totalWins = 0; totalWins <= totalGames;){
      $(".wins").text("You have won" + totalWins + "times");
      totalWins = totalWins +1;
  }
  for (totalLoses = 0; totalLoses <= totalGames; ){
    $(".loses").text("You have lost" + totalLoses + "times");
    totalLoses = totalLoses +1;
  }
  for (totalTies = 0; totalTies <= totalGames; ){
    $(".ties").text("You have tied" + totalTies + "times");
    totalTies = totalTies +1;
//     move the 
}
  
  
    // use 'result'

  $(".result").text(result);
  $(".winRate").text("Your win rate is" + winRate + "percent");
  $(".games").text("You have played" + totalGames + "times");
});
