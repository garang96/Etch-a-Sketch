const gridMainContainer = document.querySelector('.grid-squares');

let gridSquare = document.querySelectorAll('.grid-square');

const gridSquares = (squaresNum) => {
    for (let i = 1; i <= squaresNum; i++) {
        gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridMainContainer.appendChild(gridSquare);
    }
}

gridSquares(21);