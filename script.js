let humanChoice = ""
let computerChoice = ""
let humanScore = 0
let computerScore = 0
let roundsPlayed = 0
let result = ""

function getComputerChoice() {
    let aleat = Math.floor(Math.random() * 3)
    if (aleat===0) {
        computerChoice="Rock"
    }
    else if (aleat===1) {
        computerChoice="Paper"
    }
    else if (aleat===2) {
        computerChoice="Scissors"
    }
    return computerChoice
}

function roundResult(humanChoice, computerChoice) {
    if (humanChoice==="Rock" && computerChoice==="Paper") {
        computerScore++
        return "You lose! Paper beats rock"
    } else if (humanChoice==="Rock" && computerChoice==="Scissors") {
        humanScore++
        return "You won! Rock beats scissors"
    } else if (humanChoice==="Paper" && computerChoice==="Scissors") {
        computerScore++
        return "You lose! Scissors beats paper"
    } else if (humanChoice==="Paper" && computerChoice==="Rock") {
        humanScore++
        return "You won! Paper beats rock"
    } else if (humanChoice==="Scissors" && computerChoice==="Rock") {
        computerScore++
        return "You lose! Rock beats scissors"
    } else if (humanChoice==="Scissors" && computerChoice==="Paper") {
        humanScore++
        return "You won! Scissors beats paper"
    } else {
        return "Draw!"
    }
    return result
}

const BUTTONS = document.querySelectorAll(".button");

BUTTONS.forEach((button) => {
    button.addEventListener("click", () => {
        if (roundsPlayed>=5) {
            
            if (humanScore > computerScore) {
                log("FINAL: YOU WIN!")
            } else if (humanScore < computerScore) {
                log("FINAL: YOU LOSE!")
            } else {
                log("FINAL: DRAW!")
            }

            return
        }

        roundsPlayed++

        humanChoice = button.textContent
        computerChoice = getComputerChoice()
        result = roundResult(humanChoice, computerChoice)
        log()
    })
})

function log(finalMessage) {
    const CONSOLE_SCREEN = document.querySelector("#console")
    if (finalMessage) {
            CONSOLE_SCREEN.innerHTML = `${finalMessage}<br>
                                        Final score: ${humanScore} x ${computerScore}
                                        `
            return
    }

    CONSOLE_SCREEN.innerHTML = `Player: ${humanChoice}<br>
                                Computer: ${computerChoice}<br>
                                Result: ${result}<br>
                                Player score: ${humanScore}<br>
                                Compurer score: ${computerScore}<br>
                                Round: ${roundsPlayed}/5
                                `
}