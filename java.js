
//create a container
let gridContainer = document.createElement("div");
//add container to body
document.body.appendChild(gridContainer);

const btn = document.createElement("button");
btn.textContent = ("choose grid size")

//create a main container
let mainContainer = document.createElement("div");
mainContainer.style.display = "flex";
document.body.appendChild(mainContainer);
mainContainer.appendChild(gridContainer);
//add the gridContainer into mainContainer
mainContainer.insertBefore(btn, gridContainer);
//make flexbox go from top to bottom 
mainContainer.style.flexDirection = "column";
//set the width of button to grid length 
//createGrid

//turn container into flexbox
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";  // Added: allows wrapping to create rows
gridContainer.style.alignItems = "center";
//change container color 
gridContainer.style.backgroundColor = "aqua";
btn.onclick = createGrid;
//Create grid using size
function createGrid() {
    const size = prompt('Enter the number of squares per side for the new grid (max 100):');

    if (!size || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100");
        return;
    }

    // Clear existing grid
    gridContainer.innerHTML = '';

    // Calculate container width (22px per square: 20px + 2px margin)
    const squareSize = 20;
    const margin = 2;
    const totalSquareSize = squareSize + margin;
    gridContainer.style.width = (totalSquareSize * size) + "px";
    btn.style.width = gridContainer.style.width;

    // ✅ Create size × size squares (not just size squares)
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");

        gridItem.style.width = squareSize + 'px';
        gridItem.style.height = squareSize + 'px';
        gridItem.style.backgroundColor = '#fff';
        gridItem.style.borderRadius = '2px';
        gridItem.style.transition = 'all 0.2s ease';
        gridItem.style.cursor = 'pointer';
        gridItem.style.margin = '1px';

        gridItem.setAttribute('data-index', i);
        gridContainer.appendChild(gridItem);

        //adding hover effect 
        gridItem.addEventListener('mouseenter', function () {
            this.style.backgroundColor = rgbToString(getRandomRGB());
        });

        gridItem.addEventListener('mouseleave', function () {
            this.style.backgroundColor = '#fff';
        });

    }
}
// Function to generate random RGB values
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}

// Function to convert RGB object to CSS rgb string
function rgbToString(rgb) {
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}