function getComputerChoice() {
    let aleat = Math.floor(Math.random() * 3)
    let computerChoice=""
    if (aleat===0) {
        computerChoice="rock"
    }
    else if (aleat===1) {
        computerChoice="paper"
    }
    else if (aleat===2) {
        computerChoice="scissors"
    }
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissor? ")
    return humanChoice
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    console.log("You choose: ", humanChoice)
    console.log("Computer choose: ", computerChoice)
    if (humanChoice.toLowerCase()==="rock" && computerChoice==="paper") {
        console.log("You lose! Paper beats rock")
        computerScore+=1
    } else if (humanChoice.toLowerCase()==="rock" && computerChoice==="scissors") {
        console.log("You won! Rock beats scissors")
        humanScore+=1
    } else if (humanChoice.toLowerCase()==="paper" && computerChoice==="scissors") {
        console.log("You lose! Scissors beats paper")
        computerScore+=1 
    } else if (humanChoice.toLowerCase()==="paper" && computerChoice==="rock") {
        console.log("You won! Paper beats rock")
        humanScore+=1
    } else if (humanChoice.toLowerCase()==="scissors" && computerChoice==="rock") {
        console.log("You lose! Rock beats scissors")
        computerScore+=1
    } else if (humanChoice.toLowerCase()==="scissors" && computerChoice==="paper") {
        console.log("You won! Scissors beats paper")
        humanScore+=1
    } else if (humanChoice.toLowerCase()===computerChoice){
        console.log("Draw!")
    }
    return {humanScore, computerScore}
}

function playGame() {
    let gamesPlayed = 0
    let humanScore = 0
    let computerScore = 0
    while (gamesPlayed<5) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        const resultado = playRound(
        humanSelection, 
        computerSelection, 
        humanScore, 
        computerScore)

        humanScore = resultado.humanScore
        computerScore = resultado.computerScore

        console.log("Your score: ", humanScore)
        console.log("Computer score: ", computerScore)
        gamesPlayed+=1
    }
}

const BUTTON_ROCK = document.querySelector(".button-rock")
const BUTTON_PAPER = document.querySelector(".button-paper")
const BUTTON_SCISSORS = document.querySelector(".button-scissors")

console.log(playGame())