// JavaScript for interactivity (if needed)
document.addEventListener("DOMContentLoaded", function () {
  console.log("WSU College Hill Parking website loaded!");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle menu on button click
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("nav-open"); // Show/hide menu
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("nav-open"); // Hide menu after clicking a link
    });
  });
});
