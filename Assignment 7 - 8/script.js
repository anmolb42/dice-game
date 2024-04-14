document.addEventListener('DOMContentLoaded', function() {
    const rollButton = document.getElementById('roll-button');
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const player1ScoreDisplay = document.getElementById('player1-score');
    const player2ScoreDisplay = document.getElementById('player2-score');
    const winnerMessage = document.getElementById('winner-message');

    let player1Score = 0;
    let player2Score = 0;

    function rollDice() {
        const dice1Value = Math.floor(Math.random() * 6) + 1;
        const dice2Value = Math.floor(Math.random() * 6) + 1;
        dice1.src = `dice${dice1Value}.png`;
        dice2.src = `dice${dice2Value}.png`;

        const scoreDifference = Math.abs(dice1Value - dice2Value);
        if (dice1Value > dice2Value) {
            player1Score += scoreDifference;
        } else if (dice2Value > dice1Value) {
            player2Score += scoreDifference;
        }
        updateScore();
        checkWinner();
    }

    function updateScore() {
        player1ScoreDisplay.textContent = `Player 1 Score: ${player1Score}`;
        player2ScoreDisplay.textContent = `Player 2 Score: ${player2Score}`;
    }

    function checkWinner() {
        const winningScore = 20; // Change this to your desired winning score
        if (player1Score >= winningScore) {
            winnerMessage.textContent = 'Player 1 wins!';
            rollButton.disabled = true;
        } else if (player2Score >= winningScore) {
            winnerMessage.textContent = 'Player 2 wins!';
            rollButton.disabled = true;
        }
    }

    rollButton.addEventListener('click', rollDice);
});
