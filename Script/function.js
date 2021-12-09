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
            gridSection.classList.remove("grid");
        }
        if (square1.classList.contains("player-two") &&
            square2.classList.contains("player-two") &&
            square3.classList.contains("player-two") &&
            square4.classList.contains("player-two")) {
            result.innerText = "Player 2 Wins!";
            result.classList.remove("hidden");
            gridSection.classList.remove("grid");
        }
    }
}