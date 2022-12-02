// SET THE CURRENT YEAR :
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
// MAKE THE MOBILE NAVIGATION WORK :
const headerEl = document.querySelector(".header");
const btnMobile = document.querySelector(".btn__mobile-nav");
btnMobile.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
// SMOOTH SCROLLING :
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // close mobile navigation
    if (link.classList.contains("main__nav__link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".section__hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewPort

    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
