document.addEventListener('DOMContentLoaded', () => {
  const userChoice = document.querySelector('.user-choice')
  const computerChoice = document.querySelector('.computer-choice')

  const playerCounter = document.querySelector('#player-counter')
  const computerCounter = document.querySelector('#computer-counter')
  const winnerLabel = document.querySelector('.winner-label')

  let playerNumberCounter = 0
  let computerNumberCounter = 0

  const rockIcon = document.querySelector('#rock-icon')
  const paperIcon = document.querySelector('#paper-icon')
  const scissorsIcon = document.querySelector('#scissors-icon')

  const rockChoice = document.querySelector('#rock-choice')
  const paperChoice = document.querySelector('#paper-choice')
  const scissorsChoice = document.querySelector('#scissors-choice')

  let stringUserChoice = ''
  let stringComputerChoice = ''

  const computerOptions = [
    rockIcon.cloneNode(),
    paperIcon.cloneNode(),
    scissorsIcon.cloneNode(),
  ]

  const stringOptions = ['rock', 'paper', 'scissors']

  const setOptions = (option) => {
    userChoice.innerHTML = ''
    userChoice.appendChild(option)
    let randomChoice = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    computerChoice.innerHTML = ''
    computerChoice.appendChild(computerOptions[randomChoice])
    stringComputerChoice = stringOptions[randomChoice]
  }

  const removeListeners = () => {
    console.log('removing listeners')
    rockChoice.removeEventListener('click', rockChoiceListener)
    paperChoice.removeEventListener('click', paperChoiceListener)
    scissorsChoice.removeEventListener('click', scissorsChoiceListener)
  }

  const checkWinner = () => {
    if((stringUserChoice === 'rock' && stringComputerChoice === 'scissors') || 
       (stringUserChoice === 'paper' && stringComputerChoice === 'rock') ||
       (stringUserChoice === 'scissors' && stringComputerChoice === 'paper')) {
      playerCounter.textContent = ++playerNumberCounter
    } else if ((stringUserChoice === 'scissors' && stringComputerChoice === 'rock') ||
               (stringUserChoice === 'rock' && stringComputerChoice === 'paper') ||
               (stringUserChoice === 'paper' && stringComputerChoice === 'scissors')) {
      computerCounter.textContent = ++computerNumberCounter
    }

    if(playerNumberCounter === 5) {
      winnerLabel.textContent = 'You won!'
      removeListeners()
    } 

    if(computerNumberCounter === 5) {
      winnerLabel.textContent = 'Computer won!'
      removeListeners()
    } 
  }

  const rockChoiceListener = () => {
    setOptions(rockIcon.cloneNode())
    stringUserChoice = 'rock'
    checkWinner()
  }

  const paperChoiceListener = () => {
    setOptions(paperIcon.cloneNode())
    stringUserChoice = 'paper'
    checkWinner()
  }

  const scissorsChoiceListener = () => {
    setOptions(scissorsIcon.cloneNode())
    stringUserChoice = 'scissors'
    checkWinner()
  }

  rockChoice.addEventListener('click', rockChoiceListener)
  paperChoice.addEventListener('click', paperChoiceListener)
  scissorsChoice.addEventListener('click', scissorsChoiceListener)
})