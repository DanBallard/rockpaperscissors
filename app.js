function play (playerChoice){
 
  


var x = Math.random()
if (x <= 0.333 ){compChoice = 'rock'}
else if (x <= 0.666  && x > 0.333){compChoice = 'paper'}
else {compChoice = 'scissors'}
console.log (playerChoice)
console.log (compChoice)


if (playerChoice == 'rock' && compChoice == 'paper') {
  console.log ('Computer Wins')
}
if (playerChoice == 'rock' && compChoice == 'scissors') {
  console.log ('Player Wins')
}
if (playerChoice == 'rock' && compChoice == 'rock') {
  console.log ('Tie')
}


if (playerChoice == 'paper' && compChoice == 'paper') {
  console.log ('Tie')
}
if (playerChoice == 'paper' && compChoice == 'rock') {
  console.log ('Player Wins')
}
if (playerChoice == 'paper' && compChoice == 'scissors') {
  console.log ('Computer Wins')
}

if (playerChoice == 'scissors' && compChoice == 'scissors') {
  console.log ('Tie')
}
if (playerChoice == 'scissors' && compChoice == 'rock') {
  console.log ('Computer Wins')
}
if (playerChoice == 'scissors' && compChoice == 'paper') {
  console.log ('Player Wins')
}
 }
 
 

   
   