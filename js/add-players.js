let players = []

function displayPlayer() {
    const playersContainer = document.getElementById('added-player');
    const numberOfPlayers = document.getElementById('number-of-player');


    if (players.length <= 5) {

        playersContainer.textContent = '';
        for (let i = 0; i < players.length; i++) {
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${players[i]}</td>
            `;
            playersContainer.appendChild(tr);
            numberOfPlayers.innerText = i + 1;
        }
    }
    else {
        alert('You have already added 5 players. You cannot add more players')
    }
}

function addPlayers(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    players.push(playerName);
    displayPlayer()

    const button = element.parentNode.children[0];
    button.setAttribute('disabled', true)
    button.style.backgroundColor = "gray";
    button.style.color = "black";

}
