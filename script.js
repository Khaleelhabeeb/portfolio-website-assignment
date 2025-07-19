function sayHi() {
  alert("Hi! Thanks for visiting.");
}

// Reveal sections on scroll and on load
const sections = document.querySelectorAll("section");

function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);  // 👈 Trigger on load
