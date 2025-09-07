// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const closeMenu = document.getElementById("close-menu");
  const navbarLinks = document.querySelector(".navbar__links");

  // Function to close menu
  function closeMobileMenu() {
    burgerMenu.classList.remove("active");
    navbarLinks.classList.remove("active");
  }

  // Function to open menu
  function openMobileMenu() {
    burgerMenu.classList.add("active");
    navbarLinks.classList.add("active");
  }

  // Burger menu click - open menu
  burgerMenu.addEventListener("click", function () {
    openMobileMenu();
  });

  // Close menu click - close menu
  closeMenu.addEventListener("click", function () {
    closeMobileMenu();
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".navbar__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeMobileMenu();
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !burgerMenu.contains(event.target) &&
      !navbarLinks.contains(event.target) &&
      !closeMenu.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });
});
