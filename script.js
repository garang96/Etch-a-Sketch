const gridMainContainer = document.querySelector('.grid-squares');

const input = prompt("Enter the size of grid");

const gridSquares = (squaresNum) => {
    gridMainContainer.style.setProperty('--gridSizeColumn', squaresNum);
    gridMainContainer.style.setProperty('--gridSizeRow', squaresNum);
    for (let i = 1; i <= squaresNum; i++) {
        for (let i = 1; i <= squaresNum; i++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridMainContainer.appendChild(gridSquare);
        }

    }
}

gridSquares(input);