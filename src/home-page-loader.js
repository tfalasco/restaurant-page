import "./styles/home-styles.css"
import totsImage from "./images/tots.jpg";

export { loadHomePage };

// Load the home page
function loadHomePage() {
    // Create a div to hold the contents of this tab
    const contentDiv = document.createElement("div");
    
    // Create the header and append it to the contentDiv
    const header = document.createElement("h1");
    header.innerText = "Ted's Tater Tots";
    contentDiv.appendChild(header);
    
    // Create the sub-header and append it to the contentDiv
    const subHeader = document.createElement("h2");
    subHeader.innerText = "The best fried tubers this side of Turbeville!";
    contentDiv.appendChild(subHeader);
    
    // Create the image and append it to the contentDiv
    const image = document.createElement("img");
    const attribution = document.createElement("p");
    image.setAttribute("id", "tots-img");
    image.src = totsImage;
    image.setAttribute("atl", "A plate of fine-dining quality tater tots.")
    attribution.innerText = "Image by KamranAydinov on Freepik";
    contentDiv.appendChild(image);
    contentDiv.appendChild(attribution);

    // return the contentDiv
    return contentDiv;
}
