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

//turn container into flexbox
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.alignItems = "center";
//change container color 
gridContainer.style.backgroundColor = "aqua";
btn.onclick = createGrid;

// Function to generate random RGB values
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}

// Function to darken RGB values by a percentage
function darkenRGB(rgb, percentage) {
    const factor = 1 - (percentage / 100);
    return {
        r: Math.floor(rgb.r * factor),
        g: Math.floor(rgb.g * factor),
        b: Math.floor(rgb.b * factor)
    };
}

// Function to convert RGB object to CSS rgb string
function rgbToString(rgb) {
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

//Create grid using size
function createGrid() {
    const size = parseInt(prompt('Enter the number of squares per side for the new grid (max 100):'));

    if (!size || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100");
        return;
    }

    // Clear existing grid
    gridContainer.innerHTML = '';

    // Calculate container width
    const squareSize = 20;
    const margin = 2;
    const totalSquareSize = squareSize + margin;
    gridContainer.style.width = (totalSquareSize * size) + "px";
    btn.style.width = gridContainer.style.width;

    // Create size × size squares
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");

        gridItem.style.width = squareSize + 'px';
        gridItem.style.height = squareSize + 'px';
        gridItem.style.backgroundColor = '#fff';
        gridItem.style.borderRadius = '2px';
        gridItem.style.transition = 'all 0.2s ease';
        gridItem.style.cursor = 'pointer';
        gridItem.style.margin = '1px';

        // Initialize tracking data AFTER creating gridItem
        gridItem.dataset.interactions = '0';
        gridItem.dataset.originalRgb = '';

        gridItem.setAttribute('data-index', i);
        gridContainer.appendChild(gridItem);

        // Enhanced hover effect with progressive darkening
        gridItem.addEventListener('mouseenter', function () {
            let interactions = parseInt(this.dataset.interactions);
            
            if (interactions === 0) {
                // First interaction: set random RGB color
                const randomRgb = getRandomRGB();
                this.dataset.originalRgb = JSON.stringify(randomRgb);
                this.style.backgroundColor = rgbToString(randomRgb);
            } else if (interactions < 10) {
                // Subsequent interactions: darken by 10% each time
                const originalRgb = JSON.parse(this.dataset.originalRgb);
                const darkenedRgb = darkenRGB(originalRgb, interactions * 10);
                this.style.backgroundColor = rgbToString(darkenedRgb);
            }
            // After 10 interactions, stays completely black
            
            // Increment interaction count
            this.dataset.interactions = (interactions + 1).toString();
        });

        // Removed mouseleave - colors should persist and get progressively darker
    }
}