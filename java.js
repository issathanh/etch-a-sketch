
//create a container
gridContainer = document.createElement("div");
//add container to body
document.body.appendChild(gridContainer);
//turn container into flexbox
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";  // Added: allows wrapping to create rows
gridContainer.style.width = "352px";    // Added: width to fit exactly 16 squares per row
gridContainer.style.alignItems = "center"; 
//change container color 
gridContainer.style.backgroundColor = "aqua";
//Create 256 grid items (16x16)

for (let i = 0; i < 256; i++) {
    const gridItem = document.createElement("div");

    // Style each grid item
    gridItem.style.width = '20px';
    gridItem.style.height = '20px';
    gridItem.style.backgroundColor = '#fff';
    gridItem.style.borderRadius = '2px';
    gridItem.style.transition = 'all 0.2s ease';
    gridItem.style.cursor = 'pointer';
    gridItem.style.margin = '1px';
    gridItem.style.flex = '1 1 auto ';

    // Add data attribute
    gridItem.setAttribute('data-index', i);//data- is custom attributes
    gridContainer.appendChild(gridItem);

    //adding hover effect 
    gridItem.addEventListener('mouseenter', function () {
        this.style.backgroundColor = 'green';
    });

    gridItem.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '#fff';
    });
}

const btn = document.createElement("button"); 
btn.textContent = ("choose grid size")

//create a main container
mainContainer = document.createElement("div");
mainContainer.style.display = "flex";
document.body.appendChild(mainContainer);
mainContainer.appendChild(gridContainer);
//add the gridContainer into mainContainer
mainContainer.insertBefore(btn, gridContainer);
//make flexbox go from top to bottom 
mainContainer.style.flexDirection ="column";
//set the width of button to grid length 
btn.style.width = gridContainer.style.width
