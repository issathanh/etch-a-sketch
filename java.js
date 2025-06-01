
//create a container
divContainer = document.createElement("div");
//add container to body
document.body.appendChild(divContainer);
//turn container into flexbox
divContainer.style.display = "flex";
divContainer.style.flexWrap = "wrap";  // Added: allows wrapping to create rows
divContainer.style.width = "352px";    // Added: width to fit exactly 16 squares per row
//change container color 
divContainer.style.backgroundColor = "aqua";
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
    gridItem.setAttribute('data-index', i);
    divContainer.appendChild(gridItem);

    //adding hover effect 
    gridItem.addEventListener('mouseenter', function () {
        this.style.backgroundColor = 'green';
    });

    gridItem.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '#fff';
    });

    
    
}




