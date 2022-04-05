const rollDiceBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')
const resetBtn = document.querySelector('.btn--new')
const dice = document.querySelector('.dice')

dice.style.display = 'none'
let currentScore = 0
let activePlayer = 0
let totalScore = [0, 0]
let gameOver = false

rollDiceBtn.addEventListener('click', ()=> {
    if(!gameOver) {
        let randomNumber = Math.floor(Math.random() * 6 + 1)
    dice.style.display = 'block'
    dice.src = `dice-${randomNumber}.png`

    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    currentScore += randomNumber

    if(randomNumber == 1) {
        switchPlayer()
    }
    }
})

holdBtn.addEventListener('click', ()=> {
    if(!gameOver) {
        totalScore[`${activePlayer}`] += currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = totalScore[`${activePlayer}`]
    if(totalScore[`${activePlayer}`] >= 20) {
        gameOver = true
        document.querySelector(`.player--0`).classList.remove(`player--active`)
        document.querySelector(`.player--1`).classList.remove(`player--active`)
        document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`)
    } else {
        switchPlayer()
    }
    } 
})

function switchPlayer() {
    document.querySelector(`#current--${activePlayer}`).textContent = 0
        activePlayer = activePlayer == 0 ? 1 : 0
        currentScore = 0
        document.querySelector(`.player--0`).classList.toggle(`player--active`)
        document.querySelector(`.player--1`).classList.toggle(`player--active`)
}

resetBtn.addEventListener('click', ()=> {
    dice.style.display = 'none'
    currentScore = 0
    activePlayer = 0
    totalScore = [0, 0]
    gameOver = false
    document.querySelector(`.player--0`).classList.remove(`player--active`, `player--winner`)
    document.querySelector(`.player--1`).classList.remove(`player--active`, `player--winner`)
    document.querySelector('#score--0').textContent = 0
    document.querySelector('#score--1').textContent = 0
    document.querySelector('#current--0').textContent = 0
    document.querySelector('#current--1').textContent = 0
    document.querySelector(`.player--0`).classList.add(`player--active`)
})