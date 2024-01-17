const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerMenu = document.querySelector(".hamburger");

const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector("button");
  const activePanel = panelToActivate.querySelector(".accordion-content");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    panelToActivate
      .querySelector("button")
      .setAttribute("aria-expanded", false);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", true);
  } else {
    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", false);
  }
}

// NAV

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("navbar-toggle");
  const navbarLinks = document.getElementById("navbar-links");

  toggleButton.addEventListener("click", function () {
    navbarLinks.classList.toggle("show");
  });
});

// GSAP

const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power3.easeOut" },
});

tl.fromTo(".intro-title", { opacity: 0 }, { opacity: 1, duration: 5 });
// tl.fromTo(".wrapper", { opacity: 0 }, { opacity: 1, duration: 1 });
