const nav = document.querySelector('.site-nav');
const fadeElements = document.querySelectorAll('.left-content-wrapper > :not(.site-nav)');

const tabs = document.querySelectorAll('.site-nav a');
tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    // Fade out everything except tabs
    fadeElements.forEach(el => {
      el.classList.add('fade-out');
    });

    // Get distance from current position to top
    const rect = nav.getBoundingClientRect();
    const distanceToTop = rect.top;

    // Animate tabs sliding UP
    nav.style.transition = "transform 0.8s ease-in-out";
    nav.style.transform = `translateY(${-distanceToTop}px)`;

    // After animation ends, make tabs fixed at top
    setTimeout(() => {
      nav.style.position = "fixed";
      nav.style.top = "0";
      nav.style.left = "50%";
      nav.style.transform = "translateX(-50%)";
      nav.style.width = "100%";
      nav.style.padding = "15px 0";
      nav.style.background = "#070707";
      nav.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
    }, 800); // match transition duration
  });
});