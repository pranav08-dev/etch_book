function createBoxes(numberPerRow) {
    const container = document.querySelector('.container');
    container.innerHTML = ""; // Clear existing boxes
    const boxPercent = 100 / numberPerRow;

    for (let i = 0; i < numberPerRow * numberPerRow; i++) {
        const div = document.createElement('div');
        div.style.cssText = `
            width: ${boxPercent}%;
            aspect-ratio: 1 / 1;
            border: 1px solid #ccc;
            background-color: white;
        `;
        container.appendChild(div);
    }
}

function changeGridSize() {
    const gridSize = prompt("Enter new grid size (max 100):");
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }
    createBoxes(gridSize);
}

function applyColor(colorFunction) {
    const divs = document.querySelectorAll(".container div");
    divs.forEach(div => {
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = colorFunction();
        });
    });
}

document.querySelector(".pencil").addEventListener("click", () => {
    applyColor(() => 'hsl(0, 0%, 0%)'); // Black color
});

document.querySelector(".eraser").addEventListener("click", () => {
    applyColor(() => 'white'); // White color
});

document.querySelector(".rainbow").addEventListener("click", () => {
    applyColor(() => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')); // Random color
});

document.querySelector(".clear").addEventListener("click", () => {
    const divs = document.querySelectorAll(".container div");
    divs.forEach(div => div.style.backgroundColor = 'white'); // Clear all boxes
});

document.querySelector(".grid").addEventListener("click", changeGridSize);

const buttons = document.querySelectorAll('.btn button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
