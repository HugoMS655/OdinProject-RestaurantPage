import "./styles/styles.css";

const mainContent = document.querySelector("#content");

const headerNav = document.querySelector("#nav-menu");

headerNav.addEventListener("click", (event) => {
  if (event.target.classList.contains("header-btn")) {
    drawTabs(event.target.id);
  }
});

function drawTabs(id) {
  switch (id) {
    case "home-btn":
      break;
    case "menu-btn":
      break;
    case "about-btn":
      break;
    case "contact-btn":
      break;
  }
}

drawTabs("home-btn");
