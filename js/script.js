"use strict";

const dropDown = document.querySelectorAll(".drop-down-hover");
const navWrapper = document.querySelector(".navbar-wrapper");
const frontPage = document.querySelector(".front-page");
const loginPage = document.querySelector(".login-page");
const signupPage = document.querySelector(".signup-page");
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

// Nav list items
if (window.innerWidth < 1000) {
  menu.addEventListener("click", function (e) {
    navbar.classList.toggle("change");

    if (!navbar.classList.contains("change")) {
      document.querySelectorAll(".nav-drop-down").forEach((dropDown) => {
        dropDown.style.left = "-20rem";
      });
    }
  });

  document.querySelectorAll(".show-drop-down").forEach((link) => {
    link.addEventListener("click", (e) => {
      link.nextElementSibling.style.left = "0";
    });
  });

  document.querySelectorAll(".dropdown-heading-link").forEach((headingLink) => {
    headingLink.addEventListener("click", (e) => {
      headingLink.parentElement.parentElement.style.left = "-20rem";
    });
  });
} else {
  // Navbar DropDown
  dropDown.forEach((item) => {
    const navLink = item.querySelector(".show-drop-down");

    navLink.addEventListener("mouseover", function () {
      navLink.querySelector("i").style.transform = "rotate(180deg)";
      navLink.nextElementSibling.style.opacity = 1;
      navLink.nextElementSibling.style.visibility = "visible";
      navWrapper.style.background =
        "linear-gradient(to right, #066399, #2f8fdf, #066399)";
    });

    navLink.addEventListener("mouseleave", function () {
      navLink.querySelector("i").style.transform = "rotate(0)";
      navLink.nextElementSibling.style.opacity = 0;
      navLink.nextElementSibling.style.visibility = "hidden";
      navWrapper.style.background = "transparent";
    });
  });
}

// Show front Page
document.querySelectorAll(".logo").forEach((logoBtn) => {
  logoBtn.addEventListener("click", function (e) {
    signupPage.style.display = "none";
    loginPage.style.display = "none";
    frontPage.style.display = "block";
  });
});

// Show Login Page
document.querySelectorAll(".login").forEach((logBtn) => {
  logBtn.addEventListener("click", function (e) {
    frontPage.style.display = "none";
    signupPage.style.display = "none";
    loginPage.style.display = "block";
  });
});

// Show SignUp Page
document.querySelectorAll(".signup").forEach((signupBtn) => {
  signupBtn.addEventListener("click", function (e) {
    frontPage.style.display = "none";
    loginPage.style.display = "none";
    signupPage.style.display = "flex";
  });
});

//
if (window.innerWidth < 550) {
  const logo = document.querySelector(".logo");
  logo.innerHTML = `
  <span class="p-1">P</span>
  <span class="p-2">P</span>
  `;
}

//
window.addEventListener("resize", () => {
  window.location.reload();
});
