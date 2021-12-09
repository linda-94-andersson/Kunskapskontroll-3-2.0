for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", startClick);
    function startClick() {
        if (squares[i + 7].classList.contains("taken") && !squares[i].classList.contains("taken")) {
            if (currentPlayer === 1) {
                showColorDiv.classList.add("player-two");
                showColorDiv.classList.remove("player-one");
                squares[i].classList.add("taken"),
                    squares[i].classList.add("player-one");
                currentPlayer = 2;
                displayCurrentPlayer.innerText = currentPlayer;
            } else if (currentPlayer === 2) {
                showColorDiv.classList.add("player-one");
                showColorDiv.classList.remove("player-two");
                squares[i].classList.add("taken"),
                    squares[i].classList.add("player-two");
                currentPlayer = 1;
                displayCurrentPlayer.innerText = currentPlayer;
            }
        } checkBoard();
    }
}