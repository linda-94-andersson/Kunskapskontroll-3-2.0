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
        }
        function checkBoard() {
            for (let i = 0; i < winninArrays.length; i++) {
                const square1 = squares[winninArrays[i][0]];
                const square2 = squares[winninArrays[i][1]];
                const square3 = squares[winninArrays[i][2]];
                const square4 = squares[winninArrays[i][3]];
                if (square1.classList.contains("player-one") &&
                    square2.classList.contains("player-one") &&
                    square3.classList.contains("player-one") &&
                    square4.classList.contains("player-one")) {
                    result.innerText = "Player 1 Wins!";
                    result.classList.remove("hidden");
                    break;
                }
                if (square1.classList.contains("player-two") &&
                    square2.classList.contains("player-two") &&
                    square3.classList.contains("player-two") &&
                    square4.classList.contains("player-two")) {
                    result.innerText = "Player 2 Wins!";
                    result.classList.remove("hidden");
                    break;
                }
            }
        } checkBoard();
    }
}