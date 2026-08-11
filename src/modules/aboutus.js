export function drawAboutUs(mainContent) {
  const aboutUsContainer = document.createElement("section");
  aboutUsContainer.classList.add("about-section");

  drawIntro(aboutUsContainer);
  drawStory(aboutUsContainer);
  drawDetails(aboutUsContainer);
  drawTagline(aboutUsContainer);
  drawDisclaimer(aboutUsContainer);

  mainContent.appendChild(aboutUsContainer);
}

function drawIntro(aboutUsContainer) {
  const aboutIntro = document.createElement("section");
  aboutIntro.classList.add("intro-section");

  const introTitle = document.createElement("h1");
  introTitle.textContent = "About Us";
  const introParagraph = document.createElement("p");
  introParagraph.textContent =
    "Event Horizon Eatery is proud to be the galaxy's most highly rated dining establishment for the 12th consecutive year — as voted by our own internal review board.";

  aboutIntro.appendChild(introTitle);
  aboutIntro.appendChild(introParagraph);

  aboutUsContainer.appendChild(aboutIntro);
}

function drawStory(aboutUsContainer) {
  const aboutStory = document.createElement("section");
  aboutStory.classList.add("story-section");

  const storyTitle = document.createElement("h2");
  storyTitle.textContent = "Story";
  const fstParagraph = document.createElement("p");
  fstParagraph.textContent =
    "Founded in 2247 by Founder and CEO Aldric Voss, Event Horizon Eatery was built on a simple vision: that every citizen of the cosmos deserves a nutritious, affordable, and legally edible meal.";
  const sndParagraph = document.createElement("p");
  sndParagraph.textContent =
    "Our patented NebulaFresh™ preservation technology ensures that every ingredient arrives at your table in optimal consumption condition — a claim that has only been disputed in court twice.";

  aboutStory.appendChild(storyTitle);
  aboutStory.appendChild(fstParagraph);
  aboutStory.appendChild(sndParagraph);

  aboutUsContainer.appendChild(aboutStory);
}

function drawDetails(aboutUsContainer) {
  const aboutDetails = document.createElement("section");
  aboutDetails.classList.add("details-section");

  const detailsLocation = document.createElement("div");
  detailsLocation.classList.add("location-container");

  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "Location";
  const locationDescription = document.createElement("p");
  locationDescription.textContent =
    "We are conveniently located at the edge of Cygnus X-1, just past the point of no return. Our legal team assures us this is not a liability.";

  detailsLocation.appendChild(locationTitle);
  detailsLocation.appendChild(locationDescription);

  const detailsChef = document.createElement("div");
  detailsChef.classList.add("chefs-container");

  const chefsNote = document.createElement("h2");
  chefsNote.textContent = "Chef's Note";
  const chefsNoteDescription = document.createElement("p");
  chefsNoteDescription.textContent =
    "Chef Voss personally oversees every menu item and reminds guests that any resemblance to synthetic protein is purely coincidental.";

  detailsChef.appendChild(chefsNote);
  detailsChef.appendChild(chefsNoteDescription);

  aboutDetails.appendChild(detailsLocation);
  aboutDetails.appendChild(detailsChef);

  aboutUsContainer.appendChild(aboutDetails);
}

function drawTagline(aboutUsContainer) {
  const tagline = document.createElement("p");
  tagline.textContent =
    "Event Horizon Eatery — Because you deserve the best. And if not the best, at least the closest.";

  aboutUsContainer.appendChild(tagline);
}

function drawDisclaimer(aboutUsContainer) {
  const aboutDisclaimer = document.createElement("section");
  aboutDisclaimer.classList.add("disclaimer-section");

  const disclaimerTitle = document.createElement("h2");
  disclaimerTitle.textContent = "Disclaimer";
  const disclaimerParagraph = document.createElement("p");
  disclaimerParagraph.textContent =
    "Management is not responsible for temporal displacement, gravitational side effects, or existential crises experienced during your visit. Enjoy your meal.";

  aboutDisclaimer.appendChild(disclaimerTitle);
  aboutDisclaimer.appendChild(disclaimerParagraph);

  aboutUsContainer.appendChild(aboutDisclaimer);
}
