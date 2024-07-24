const computerChoiceDisplay = document.getElementById('computer-Choice')
const userChoiceDisplay = document.getElementById('user-Choice')
const resultDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button')
let userChoice
let computerChoice

choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = 'Its a Tie!'
    } else if (computerChoice = 'rock' && userChoice === 'paper') {
        resultDisplay.innerHTML = 'You Win!'
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'You Lose!'
    }else if (computerChoice = 'paper' && userChoice === 'rock') {
        resultDisplay.innerHTML = 'You Lose!'
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'You Win!'
    }else if (computerChoice = 'scissors' && userChoice === 'rock') {
        resultDisplay.innerHTML = 'You Win!'
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        resultDisplay.innerHTML = 'You Lose!'
    }
}