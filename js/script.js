//for some unkown reason we if we use all lowercase it gives all 3 results \/(-_-)\/
//NVM william fixed it
let computerChoiceNum = ["rock", "paper", "scissors"];

let randomNumber = 0;

// User clicks button

// Thunpitcha's function
// Docs: https://docs.google.com/document/d/1gq7oUif59sKDInbJrDTIeSQBaOlGb5ri06b2-noWWNI/edit#heading=h.x4lnrrw34ze2
function getRandomComputerChoice() {
  return computerChoiceNum;
  randomNumber = Math.floor(Math.random() * 3);
  $(".computerChoice").text(computerChoiceNum[randomNumber]);
}

$(".play").click(function() {
  let user_choice = $(".input").val();

  $(".userChoice").text(user_choice);
  user_choice = user_choice.toLowerCase();
  randomNumber = Math.floor(Math.random() * 3);

  $(".computerChoice").text(computerChoiceNum[randomNumber]);

  // Here
  console.log(user_choice);
  console.log(computerChoiceNum[randomNumber]);

  if (user_choice == "rock" && computerChoiceNum[randomNumber] == "scissors") {
    /// result = ...;
    let result = "You Won!";
    return result;
  } else if (
    user_choice == "rock" &&
    computerChoiceNum[randomNumber] == "rock"
  ) {
    let result = "You Tied!";
    return result;
  } else if (
    user_choice == "rock" &&
    computerChoiceNum[randomNumber] == "paper"
  ) {
    let result = "You Lost!";
    return result;
  } else if (
    user_choice == "paper" &&
    computerChoiceNum[randomNumber] == "rock"
  ) {
    let result = "You Won!";
    return result;
  } else if (
    user_choice == "paper" &&
    computerChoiceNum[randomNumber] == "scissors"
  ) {
    let result = "You Lost!";
    return result;
  } else if (
    user_choice == "paper" &&
    computerChoiceNum[randomNumber] == "paper"
  ) {
    let result = "You Tied!";
    return result;
  } else if (
    user_choice == "scissors" &&
    computerChoiceNum[randomNumber] == "scissors"
  ) {
    let result = "You Tied!";
    return result;
  } else if (
    user_choice == "scissors" &&
    computerChoiceNum[randomNumber] == "rock"
  ) {
    let result = "You Lost!";
    return result;
  } else if (
    user_choice == "scissors" &&
    computerChoiceNum[randomNumber] == "paper"
  ) {
    let result = "You Won!";
    return result;
  } else {
    $(".result").append(`<p>Your input is invalid, try again.<p>`);
  }
  // use 'result'
  console.log(result);
  $(".result").append(`<p>${result}</p>`);
});
