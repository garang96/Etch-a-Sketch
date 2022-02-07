const gridMainContainer = document.querySelector('.grid-squares');

const gridSquares = (squaresNum) => {
    for (let i = 1; i <= squaresNum; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridMainContainer.appendChild(gridSquare);
    }
}

gridSquares(17);