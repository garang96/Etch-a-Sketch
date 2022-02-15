const gridMainContainer = document.querySelector('.grid-squares');
const instructionText = document.getElementById('instruction');
const userInput = document.getElementById('user-input');
const createBtn = document.getElementById('create');
const clearBtn = document.getElementById('clear');

let guideText = instructionText.innerText;
var gridSquare;

//create grid of squares

const gridSquares = (squaresNum) => {
    let gridSquare;
    gridMainContainer.style.setProperty('--gridSizeColumn', squaresNum);
    if (squaresNum > 100) {
        instructionText.innerText = 'Enter a grid square size not greater than 100';
        instructionText.style.color = 'red';
    } else {
        instructionText.innerText = guideText;
        for (let i = 1; i <= squaresNum; i++) {
            for (let i = 1; i <= squaresNum; i++) {
                gridSquare = document.createElement('div');
                gridSquare.classList.add('grid-square');
                gridMainContainer.appendChild(gridSquare);
            }
        }

    }
}

//events for create button

const createGrids = (e) => {
    gridSquares(userInput.value);
    instructionText.innerText = `You've created a ${userInput.value} by ${userInput.value} grid of squares`;
    instructionText.style.color = 'white';
    if (userInput.value === "") {
        instructionText.innerText = "Enter a grid square size";
        instructionText.style.color = 'red';
        return;
    }
    if (userInput.value <= 0) {
        gridMainContainer.innerHTML = "";
        instructionText.innerText = 'Invalid entry';
        instructionText.style.color = 'red';
        return;
    }
}

//events for clear button

clearBtn.addEventListener('click', e => {
    gridMainContainer.innerHTML = "";
    userInput.value = "";
    instructionText.innerText = guideText;
    instructionText.style.color = 'white';

});

//hover effect

const hoverEffect = (e) => {
    e.stopPropagation();
    const target = e.target;
    if (target.className === 'grid-square')
        target.style.background = generateRandomColor();
}

//unhover effect

const unhoverEffect = (e) => {
    e.stopPropagation();
    if (e.target.className === 'grid-square')
        e.target.style.background = 'brown';
}

createBtn.addEventListener('click', createGrids);
gridMainContainer.addEventListener("mouseover", hoverEffect);
gridMainContainer.addEventListener("mouseout", unhoverEffect);
window.addEventListener('keydown', e => {
    if (e.keyCode === 13) createGrids();
});

// generate random rgb color

const generateRandomColor = () => {
    let maxColorValue = 0xffffff;

    //generate random number
    let randomNumber = Math.random() * maxColorValue;

    //convert random number to integer
    randomNumber = Math.floor(randomNumber);

    //convert random number to hex value
    randomNumber = randomNumber.toString(16);

    //ensure string length is atleast 6
    let randomColor = randomNumber.padStart(6, 0);
    return `#${randomColor.toUpperCase()}`;
}