const gridMainContainer = document.querySelector('.grid-squares');
const instructionText = document.getElementById('instruction');
const userInput = document.getElementById('user-input');
const createBtn = document.getElementById('create');
const clearBtn = document.getElementById('clear');
let guideText = instructionText.innerText;

const gridSquares = (squaresNum) => {
    gridMainContainer.style.setProperty('--gridSizeColumn', squaresNum);
    if (squaresNum > 100) {
        instructionText.innerText = 'Enter a grid square size not greater than 100';
        instructionText.style.color = 'red';
    } else {
        instructionText.innerText = guideText;
        for (let i = 1; i <= squaresNum; i++) {
            for (let i = 1; i <= squaresNum; i++) {
                const gridSquare = document.createElement('div');
                gridSquare.classList.add('grid-square');
                gridMainContainer.appendChild(gridSquare);
            }
        }

    }
}

createBtn.addEventListener('click', e => {
    gridSquares(+userInput.value);
    if (userInput.value === "") {
        instructionText.style.color = 'red';
        instructionText.innerText = "Enter a grid square size";
    }

});
clearBtn.addEventListener('click', e => {
    gridMainContainer.innerHTML = "";
    userInput.value = "";
    instructionText.style.color = 'white';
    instructionText.innerText = guideText;

});