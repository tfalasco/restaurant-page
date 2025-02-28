import "./main-styles.css";
import { loadHomePage } from "./home-page-loader";
import { loadMenuPage } from "./menu-page-loader";
import { loadAboutPage } from "./about-page-loader";

// Get a reference to the content element that will be used
// by all tabs
const contentDiv = document.querySelector("#content");

// Register event listeners for tab buttons
const homeBtn = document.querySelector("#homeBtn");
homeBtn.addEventListener("click", () => {
    contentDiv.innerText = "";
    contentDiv.appendChild(loadHomePage());
})

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", () => {
    contentDiv.innerText = "";
    contentDiv.appendChild(loadMenuPage());
})

const aboutBtn = document.querySelector("#aboutBtn");
aboutBtn.addEventListener("click", () => {
    contentDiv.innerText = "";
    contentDiv.appendChild(loadAboutPage());
})

// Load the home page when first entering the page
contentDiv.appendChild(loadHomePage());