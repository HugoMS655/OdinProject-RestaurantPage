import "./styles/styles.css";

const mainContent = document.querySelector("#content");

const headerNav = document.querySelectorAll("#nav-menu");

headerNav.addEventListeners("click", (event) => {
  if (event.target.classList.contains("header-btn")) {
    switch (event.target.id) {
      case "home-btn":
        drawHomeTab();
        break;
      case "menu-btn":
        drawMenuTab();
        break;
      case "about-btn":
        drawAboutUsTab();
        break;
      case "contact-btn":
        drawContactTab();
        break;
    }
  }
});

function drawHomeTab() {}

function drawMenuTab() {}

function drawAboutUsTab() {}

function drawContactTab() {}
