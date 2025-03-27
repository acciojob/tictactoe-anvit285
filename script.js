//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplayer Tic Tac Toe</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .container {
            margin-top: 50px;
        }
        .input-section {
            margin-bottom: 20px;
        }
        .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            gap: 5px;
            margin: auto;
            width: 320px;
            display: none;
        }
        .cell {
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2em;
            background-color: #f0f0f0;
            border: 2px solid #000;
            cursor: pointer;
        }
        .message {
            margin-top: 20px;
            font-size: 1.2em;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="input-section">
            <input type="text" id="player-1" placeholder="Enter Player 1 Name">
            <input type="text" id="player-2" placeholder="Enter Player 2 Name">
            <button id="submit">Start Game</button>
        </div>

        <h1 style="display: none;">Tic Tac Toe</h1>
        <div class="message"></div>

        <div class="board" id="board">
            <div class="cell" id="1"></div>
            <div class="cell" id="2"></div>
            <div class="cell" id="3"></div>
            <div class="cell" id="4"></div>
            <div class="cell" id="5"></div>
            <div class="cell" id="6"></div>
            <div class="cell" id="7"></div>
            <div class="cell" id="8"></div>
            <div class="cell" id="9"></div>
        </div>
    </div>

    <script>
        document.getElementById("submit").addEventListener("click", function () {
            const player1 = document.getElementById("player-1").value.trim();
            const player2 = document.getElementById("player-2").value.trim();

            if (player1 === "" || player2 === "") {
                alert("Please enter names for both players.");
                return;
            }

            document.querySelector("h1").style.display = "block";
            document.querySelector(".board").style.display = "grid";
            document.querySelector(".message").textContent = `${player1}, you're up!`;

            let currentPlayer = player1;
            let currentSymbol = "X";
            const board = document.querySelectorAll(".cell");
            const winningCombos = [
                [1, 2, 3], [4, 5, 6], [7, 8, 9],
                [1, 4, 7], [2, 5, 8], [3, 6, 9],
                [1, 5, 9], [3, 5, 7]
            ];

            function checkWin() {
                return winningCombos.some(combo => 
                    combo.every(id => document.getElementById(id).textContent === currentSymbol)
                );
            }

            board.forEach(cell => {
                cell.addEventListener("click", function () {
                    if (this.textContent === "") {
                        this.textContent = currentSymbol;

                        if (checkWin()) {
                            document.querySelector(".message").textContent = `${currentPlayer} congratulations, you won!`;
                            board.forEach(cell => cell.style.pointerEvents = "none");
                            return;
                        }

                        currentPlayer = currentPlayer === player1 ? player2 : player1;
                        currentSymbol = currentSymbol === "X" ? "O" : "X";
                        document.querySelector(".message").textContent = `${currentPlayer}, you're up!`;
                    }
                });
            });
        });
    </script>

</body>
</html>