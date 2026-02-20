export function drawHomePage(mainContent) {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  drawHeroSection(homeContainer);
  drawCorporateSection(homeContainer);
  drawWhyVisitSection(homeContainer);
  drawFeaturedDishesSection(homeContainer);
  drawFooterSection(homeContainer);
  mainContent.appendChild(homeContainer);
}

function drawHeroSection(homeContainer) {
  const section = document.createElement("section");
  section.classList.add("hero-section");

  const title = document.createElement("h1");
  title.textContent = "Event Horizon Eatery";

  const slogan = document.createElement("p");
  slogan.textContent = '"You\'ll never want to leave"';

  const subSlogan = document.createElement("em");
  subSlogan.textContent = "— and physics will make sure of it";
  slogan.appendChild(subSlogan);

  const homeImage = document.createElement("img");
  homeImage.src = heroImage;
  homeImage.alt = "Event Horizon Eatery";

  const reservationBtn = document.createElement("button");
  reservationBtn.textContent = "Make a Reservation";
  reservationBtn.classList.add("reservation-btn");

  section.appendChild(title);
  section.appendChild(slogan);
  section.appendChild(homeImage);
  section.appendChild(reservationBtn);

  homeContainer.appendChild(section);
}

function drawCorporateSection(homeContainer) {
  const section = document.createElement("section");
  section.classList.add("corporate-section");

  const title = document.createElement("h2");
  title.textContent = "A Message From Void Industries Inc.";

  const subtitle = document.createElement("p");
  subtitle.textContent = "Your satisfaction is our primary metric.";

  const intro = document.createElement("p");
  intro.textContent =
    "At Void Industries Inc., we believe that every citizen of the galaxy deserves access to nutritious, affordable, and legally defined food products.";

  const intro2 = document.createElement("p");
  intro2.textContent =
    "Event Horizon Eatery represents our commitment to culinary excellence, customer satisfaction, and shareholder value — in that order, mostly.";

  const missionTitle = document.createElement("h3");
  missionTitle.textContent = "Our Mission";

  const mission = document.createElement("p");
  mission.textContent =
    "To provide the highest quality dining experience permitted by current galactic regulations, at a price point that remains competitive within acceptable profit margins.";

  const valuesTitle = document.createElement("h3");
  valuesTitle.textContent = "Our Values";

  const values = [
    {
      title: "Excellence",
      text: "We strive for excellence in all things, particularly in our quarterly earnings reports.",
    },
    {
      title: "Integrity",
      text: 'All claims made by Event Horizon Eatery have been reviewed by our legal team and deemed "defensible".',
    },
    {
      title: "Community",
      text: "We care deeply about the communities we serve, particularly those with high disposable income.",
    },
    {
      title: "Innovation",
      text: "We are constantly pushing the boundaries of what is legally considered food.",
    },
  ];

  const valuesList = document.createElement("ul");
  values.forEach(({ title, text }) => {
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = title + " — ";
    li.appendChild(strong);
    li.appendChild(document.createTextNode(text));
    valuesList.appendChild(li);
  });

  section.appendChild(title);
  section.appendChild(subtitle);
  section.appendChild(intro);
  section.appendChild(intro2);
  section.appendChild(missionTitle);
  section.appendChild(mission);
  section.appendChild(valuesTitle);
  section.appendChild(valuesList);

  homeContainer.appendChild(section);
}

function drawWhyVisitSection(homeContainer) {
  const section = document.createElement("section");
  section.classList.add("why-visit-section");

  const title = document.createElement("h2");
  title.textContent = "Why Visit Us";

  const reasons = [
    {
      emoji: "🌌",
      title: "Located at the Edge of Everything",
      text: "Conveniently situated at Cygnus X-1. Scenic views guaranteed. Return journey not.",
    },
    {
      emoji: "🍽️",
      title: "Cuisine From 17 Star Systems",
      text: "Our ingredients travel further than you ever will.",
    },
    {
      emoji: "⏱️",
      title: "Open Across Multiple Timelines",
      text: "We're always here. Relatively speaking.",
    },
  ];

  section.appendChild(title);

  reasons.forEach(({ emoji, title, text }) => {
    const card = document.createElement("div");
    card.classList.add("why-card");

    const cardEmoji = document.createElement("span");
    cardEmoji.textContent = emoji;

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = title;

    const cardText = document.createElement("p");
    cardText.textContent = text;

    card.appendChild(cardEmoji);
    card.appendChild(cardTitle);
    card.appendChild(cardText);
    section.appendChild(card);
  });

  homeContainer.appendChild(section);
}

function drawFeaturedDishesSection(homeContainer) {
  const section = document.createElement("section");
  section.classList.add("featured-dishes-section");

  const title = document.createElement("h2");
  title.textContent = "Featured Dishes";

  const dishes = [
    {
      name: "Singularity Burger",
      description: "Everything goes into it. Nothing comes out.",
      price: "12 Credits",
    },
    {
      name: "Event Horizon Sundae",
      description:
        "Guests report it is the last thing they order. We consider this a compliment.",
      price: "7 Credits",
    },
    {
      name: "Quantum Steak",
      description:
        "Exists in two states simultaneously: well done and medium rare.",
      price: "18 Credits",
    },
  ];

  section.appendChild(title);

  dishes.forEach(({ name, description, price }) => {
    const card = document.createElement("div");
    card.classList.add("dish-card");

    const dishName = document.createElement("h3");
    dishName.textContent = name;

    const dishDescription = document.createElement("p");
    dishDescription.textContent = description;

    const dishPrice = document.createElement("span");
    dishPrice.textContent = price;
    dishPrice.classList.add("dish-price");

    card.appendChild(dishName);
    card.appendChild(dishDescription);
    card.appendChild(dishPrice);
    section.appendChild(card);
  });

  homeContainer.appendChild(section);
}

function drawFooterSection(homeContainer) {
  const footer = document.createElement("footer");
  footer.classList.add("home-footer");

  const closing = document.createElement("p");
  closing.textContent =
    "Thank you for choosing Void Industries. You didn't, really. But thank you anyway.";

  const disclaimer = document.createElement("p");
  disclaimer.textContent =
    "Void Industries Inc. is not responsible for any temporal, gravitational, or existential side effects experienced at any of our establishments. Event Horizon Eatery is a subsidiary of Void Industries Inc., which is a subsidiary of Outer Darkness Holdings, which is a subsidiary of an entity we have been advised not to name publicly.";

  const copyright = document.createElement("p");
  copyright.textContent =
    "Event Horizon Eatery is a subsidiary of Void Industries Inc. All rights reserved across all known timelines.";

  footer.appendChild(closing);
  footer.appendChild(disclaimer);
  footer.appendChild(copyright);
  homeContainer.appendChild(footer);
}
