export { loadAboutPage };

// Load the about page
function loadAboutPage() {
    // Create a div to hold the contents of this tab
    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "about-contents");

    
    // Create the header and append it to the contentDiv
    const header = document.createElement("h1");
    header.innerText = "Ted's Tater Tots";
    contentDiv.appendChild(header);
    
    // Create the sub-header and append it to the contentDiv
    const subHeader = document.createElement("h2");
    subHeader.innerText = "About Us";
    contentDiv.appendChild(subHeader);
    
    // Create the about text append it to the contentDiv
    const aboutText = document.createElement("p");
    aboutText.innerText = "We make tater tots.  It ain't much, but it's honest work.";
    contentDiv.appendChild(aboutText);

    // return the contentDiv
    return contentDiv;
}
