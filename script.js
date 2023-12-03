const players = [
    'Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8', 'Player 9', 'Player 10'
];

function getRandomPlayer() {
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
}

function openPack() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const player = getRandomPlayer();
        const playerElement = document.createElement('p');
        playerElement.textContent = player;
        resultDiv.appendChild(playerElement);
    }
}
