const p1 = {
    score: 0,
    button: document.querySelector('#player1_button'),
    display: document.querySelector('#player1-score')
}

const p2 = {
    score: 0,
    button: document.querySelector('#player2_button'),
    display: document.querySelector('#player2-score')
}


//BUTTONS

const resetScore = document.querySelector('#reset_score')
const scoreTally = document.querySelector('#total-score')
const scoreDropdown = document.querySelector('#score_dropdown')


function updateScores(player, opponent) {
    player.score += 1
    if (player.score == scoreDropdown.value) {
        scoreTally.innerText = `${player.score} to ${opponent.score}`
        player.display.classList.add('loser')
        opponent.display.classList.add('winner')
        player.button.disabled = true
        opponent.button.disabled = true
    } else {
        scoreTally.innerText = `${player.score} to ${opponent.score}`
    }
}



p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

resetScore.addEventListener('click', reset)

function reset() {
    for (let p of [p1, p2]) {
        p.button.disabled = false
        p.score = 0
    }
    scoreTally.innerText = '0 to 0'
}