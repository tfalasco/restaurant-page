import "./styles/menu-styles.css";

export { loadMenuPage };

function loadMenuPage() {
        // Create a div to hold the contents of this tab
        const contentDiv = document.createElement("div");
        contentDiv.setAttribute("id", "menu-contents");
        
        // Create the header and append it to the contentDiv
        const header = document.createElement("h1");
        header.innerText = "Ted's Tater Tots";
        contentDiv.appendChild(header);
        
        // Create the sub-header and append it to the contentDiv
        const subHeader = document.createElement("h2");
        subHeader.innerText = "Menu";
        contentDiv.appendChild(subHeader);
        
        // Create menu items and append them to the contentDiv
        contentDiv.appendChild(createMenuItem("Tots", "Your standard tot.", "$6 / doz"));
        contentDiv.appendChild(createMenuItem("Deluxe Tots", "Tots with dipping sauce.", "$10 / doz"));
    
        // return the contentDiv
        return contentDiv;
}

function createMenuItem(name, description, price) {
    // Create a div to hold the contents of this menu item
    const menuItem = document.createElement("div");
    menuItem.setAttribute("class", "menuItem");

    // Add the item name to the menuItem div
    const itemName = document.createElement("h3");
    itemName.innerText = name;
    menuItem.appendChild(itemName);

    // Add the description to the menuItem div
    const itemDescription = document.createElement("p");
    itemDescription.innerText = description;
    menuItem.appendChild(itemDescription);

    // Add the price
    const itemPrice = document.createElement("p");
    itemPrice.style.fontWeight = 'bold';
    itemPrice.innerText = price;
    menuItem.appendChild(itemPrice);

    return menuItem;
}