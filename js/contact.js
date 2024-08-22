"use strict";

//////////////////////////////////////////////////
// DROPDOWN MENU (SLIDE)
$(document).on("click", function (event) {
  const targetElement = event.target;

  // Check if the clicked item does not belong to the menu
  if (
    !$(targetElement).closest(".main-nav-list > li, .main-nav-list-mobile > li")
      .length
  ) {
    // Hide all expanded menus with slideToggle effect
    $(".main-nav-list > li ul, .main-nav-list-mobile > li ul").slideUp("300");
  }
});

$(".main-nav-list > li, .main-nav-list-mobile > li").click(function () {
  $(this).siblings().find("ul").slideUp("300");
  $(this).find("ul").slideToggle("300");
});

$(document).on("keydown", function (event) {
  // Check if the key pressed is ESC (key code 27)
  if (event.keyCode === 27) {
    // Hide all expanded menus with slideToggle effect
    $(".main-nav-list > li ul, .main-nav-list-mobile > li ul").slideUp("300");
  }
});

///////////////////////////////////////////////////////////
// Nav-list manipulation with @media (max-width: 75em)

const navLinksContainerMobileEl = document.querySelector(
  ".nav-links-container-mobile"
);
const sectionNavEls = document.querySelectorAll(".section-nav");

function checkWidth() {
  const maxWidth = window.matchMedia("(max-width: 75em)").matches;

  if (maxWidth) {
    navLinksContainerMobileEl.classList.remove("hidden");
    sectionNavEls.forEach(function (sectionNavEl) {
      sectionNavEl.classList.remove("main-nav-list");
      sectionNavEl.classList.add("hidden");
    });
  } else {
    navLinksContainerMobileEl.classList.add("hidden");
    sectionNavEls.forEach(function (sectionNavEl) {
      sectionNavEl.classList.add("main-nav-list");
      sectionNavEl.classList.remove("hidden");
    });
  }
}

// Wywołanie funkcji przy załadowaniu strony
checkWidth();

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Animate On Scroll Library include
AOS.init();

/////////////////////////////////////////////////////////
// FOOTER MOBILE
const footerMobileEl = function () {
  const maxWidth = window.matchMedia("(max-width: 28em)").matches;
  const container = document.querySelector(".copyright");
  const htmlMobile = `<p class="copyright">
Copyright &copy; <span class="year">${currentYear}</span><br>by Seweryn Zagajny. <br>All
rights reserved.   <a class="privacy-policy" tabindex="0" href="privacy.html"
> <br>Polityka prywatności</a
>
</p>`;
  const html = `<p class="copyright">
Copyright &copy; <span class="year">${currentYear}</span> by Seweryn Zagajny. <br>All
rights reserved.   <a class="privacy-policy" tabindex="0" href="privacy.html"
>Polityka prywatności</a
>
</p>`;

  if (maxWidth) {
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", htmlMobile);
  } else {
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", html);
  }
};

footerMobileEl();

/////////////////////////////////////////////
//CHECK PAGE SIZE
window.addEventListener("resize", function () {
  checkWidth();
  footerMobileEl();
});
