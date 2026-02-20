import "./styles/styles.css";
import { drawHomePage } from "./modules/home.js";

const mainContent = document.querySelector("#content");

const headerNav = document.querySelector("#nav-menu");

headerNav.addEventListener("click", (event) => {
  if (event.target.classList.contains("header-btn")) {
    drawTabs(event.target.id);
  }
});

function drawTabs(id) {
  mainContent.innerHTML = ""; //to clean the content already present
  switch (id) {
    case "home-btn":
      drawHomePage(mainContent);
      break;
    case "menu-btn":
      break;
    case "about-btn":
      break;
    case "crew-btn":
      break;
    case "gallery-btn":
      break;
    case "contact-btn":
      break;
    case "redacted-btn":
      break;
  }
}

drawTabs("home-btn");
