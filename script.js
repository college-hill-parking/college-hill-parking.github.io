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

/* ============================= */
/* Footer on Mobile */
/* ============================= */
function updateFooterText() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  if (window.innerWidth <= 768) {
    footer.textContent = "Pullman Project 2040. All rights reserved.";
  } else {
    footer.textContent =
      "Pullman Project 2040. All rights reserved. | Developed as part of a student collaboration project.";
  }
}

updateFooterText(); // Run on load
window.addEventListener("resize", updateFooterText); // Run on resize

/* ============================= */
/* Church Parking Drop Down */
/* ============================= */
function toggleDetails(id) {
  var details = document.getElementById(id);
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
