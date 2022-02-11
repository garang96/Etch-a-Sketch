const gridMainContainer = document.querySelector('.grid-squares');
const instructionText = document.getElementById('instruction');

const input = prompt("Enter the size of grid");

const gridSquares = (squaresNum) => {
    gridMainContainer.style.setProperty('--gridSizeColumn', squaresNum);
    if (squaresNum > 100) {
        instructionText.innerText = 'Enter a grid square size not greater than 100';
    } else {
        for (let i = 1; i <= squaresNum; i++) {
            for (let i = 1; i <= squaresNum; i++) {
                const gridSquare = document.createElement('div');
                gridSquare.classList.add('grid-square');
                gridMainContainer.appendChild(gridSquare);
            }
        }

    }
}

gridSquares(input);