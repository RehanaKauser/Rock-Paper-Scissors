const weapons = ["rock", "paper", "scissors"]; //array of possible choices
console.log(weapons.length);

const computerChoiceIndex = Math.floor(Math.random() * weapons.length); //gets the computer's choice
const computerChoice = weapons[computerChoiceIndex];
//console.log(`Computer chose: ${computerChoice}`);

let playerChoice = prompt("Please type rock/paper/scissors:").toLowerCase(); //gets the user's choice
//const weaponChoice = weapons.map()
//console.log("User entered: " + playerChoice);

function whoWins(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("playerChoice === computerChoice");
    return "It's a draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    //console.log("player wins");
    return "You win! 🎉";
  } else {
    //console.log("final condition");
    return "You lose 💩";
  }
}

const result = whoWins(playerChoice, computerChoice);
alert(`Computer chose: ${computerChoice} \n \n${result}`);
//console.log(result);

//const playerScore = document.getElementById("playerScore");
