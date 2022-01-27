let cards = []
let message = ''
let isAlive = true
let hasBlackjack = false
let sum = 0
const titled = document.getElementById('title')
const messaged = document.getElementById('messaged')
const sumed = document.getElementById('sumed')
const carded = document.getElementById('carded')

function startGame(){
let firstPlayer = getRandomPlayer()
let secondPlayer = getRandomPlayer()
cards = [firstPlayer, secondPlayer]
sum = firstPlayer + secondPlayer
renderGame()
}

function getRandomPlayer(){
    let randomed = Math.floor(Math.random() * 11) + 1
    return randomed
}

function renderGame(){
    carded.textContent = 'Cards: '
for(let i = 0; i < cards.length; i++){
    carded.textContent += cards[i] + ' '
}



    sumed.textContent = 'Sum: ' + sum
    if(sum < 21){
        message = 'Want another card?'
    }else if(sum === 21){
        hasBlackjack = true
        message = 'You won'
    }else{
        isAlive = false
        message ='You lost'
    }
    messaged.textContent = message
}

function newCard(){
if(isAlive === true && hasBlackjack === false){
    let newOne = getRandomPlayer()
    sum += newOne
    cards.push(newOne)
    renderGame()
}else{

}
}