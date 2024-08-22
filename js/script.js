"use strict";

///////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  // Animate On Scroll Library include
  AOS.init();

  // Blocking dawnload img
  // const blockDownloadIMG = document.querySelectorAll(".img, .box-img");
  // blockDownloadIMG.forEach(function (el) {
  //   el.addEventListener("contextmenu", function (e) {
  //     e.preventDefault();
  //   });
  //   el.addEventListener("dragstart", function (e) {
  //     e.preventDefault();
  //   });
  // });
  document.addEventListener("contextmenu", function (e) {
    if (
      e.target.classList.contains("img") ||
      e.target.classList.contains("box-img")
    ) {
      e.preventDefault();
    }
  });

  document.addEventListener("dragstart", function (e) {
    if (
      e.target.classList.contains("img") ||
      e.target.classList.contains("box-img")
    ) {
      e.preventDefault();
    }
  });
});

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

//////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
//Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "0px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// TYPING LETTER
//  Classes to contain animated typing
// .typing

var Typed1 = new Typed(".typing1", {
  strings: ["Sebastian Obara"],
  typeSpeed: 40,
  cursorChar: "",
  startDelay: 50,
});

var Typed2 = new Typed(".typing2", {
  strings: ["Fotografia Motoryzacyjna"],
  typeSpeed: 40,
  cursorChar: "",
  startDelay: 1100,
});

var Typed3 = new Typed(".typing3", {
  strings: ["Profesjonalne, artystyczne zdjęcia"],
  typeSpeed: 40,
  cursorChar: "",
  startDelay: 2850,
});

var Typed3 = new Typed(".typing4", {
  strings: ["Twoich czterech kółek!"],
  typeSpeed: 40,
  cursorChar: "",
  startDelay: 5000,
});

///////////////////////////////////////////////////////////
// Delay "Zobacz Portfolio" button's function

const buttonEl = document.querySelector(".btn-box");
const heroTextBoxEl = document.querySelector(".hero-text-box");

function timeButton() {
  const maxWidth = window.matchMedia("(max-width: 58em)").matches;
  // buttonEl.setAttribute("data-aos-delay", 300);
  // buttonEl.setAttribute("data-aos", "zoom-in");
  buttonEl.classList.remove("hidden--btn-box");
  // AOS.init();

  if (maxWidth) {
    heroTextBoxEl.style.marginBottom = "30rem";
  } else {
    heroTextBoxEl.style.marginBottom = "18rem";
  }
}

///////////////////////////////////////////////////////////
// Call delay "Zobacz Portfolio" button's function
setTimeout(timeButton, 7300);

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

// Nasłuchiwanie zdarzenia resize (zmiana rozmiaru okna) i wywołanie funkcji checkWidth
// window.addEventListener("resize", checkWidth);

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
    // Close mobile navigation
    const headerEl = document.querySelector("header");
    if (anchor.classList.contains("main-nav-link") && headerEl) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
//  PHOTO LINK FUNCTION

const ImageLink = function (catygoryOfGallery, numberOfCatygories) {
  const GalleryIteamEl = [];
  const ContentEl = [];
  const ImgEl = [];
  const mouseoverPhotoLink = [];
  const mouseleavePhotoLink = [];

  for (let i = 1; i <= numberOfCatygories; i++) {
    GalleryIteamEl[i] = document.querySelector(
      `.${catygoryOfGallery}-gallery-item${i}`
    );
    ContentEl[i] = document.querySelector(`.${catygoryOfGallery}-content${i}`);
    ImgEl[i] = document.querySelector(`.${catygoryOfGallery}-img${i}`);

    mouseoverPhotoLink[i] = function () {
      ContentEl[i].classList.remove("hidden");
      GalleryIteamEl[i].style.transform = "translateY(-1.2rem)";
      ImgEl[i].style.filter = "brightness(30%)";
    };

    mouseleavePhotoLink[i] = function () {
      ContentEl[i].classList.add("hidden");
      GalleryIteamEl[i].style.transform = "translateY(0rem)";
      ImgEl[i].style.filter = "none";
    };

    GalleryIteamEl[i].addEventListener("mouseover", mouseoverPhotoLink[i]);

    ContentEl[i].addEventListener("mouseover", mouseoverPhotoLink[i]);

    GalleryIteamEl[i].addEventListener("mouseleave", mouseleavePhotoLink[i]);
  }
};

// PORTFOLIO PHOTO LINK
ImageLink("portfolio", 4);

// EVENT PHOTO LINK
ImageLink("event", 4);

///////////////////////////////////////////////////////////
// RANDOM PHOTOS FUNCTION
const randomPhotos = function (
  catygoryOfGallery,
  nameOfGallery,
  numberOfImg,
  numberOfPhotos
) {
  const ImagesEl = [];

  const randomImg = function () {
    for (let i = 1; i <= numberOfPhotos; i++) {
      ImagesEl.push(`img/${catygoryOfGallery}/${nameOfGallery}/${i}.webp`);
    }
  };
  randomImg();
  const size = ImagesEl.length;
  const x = Math.floor(size * Math.random());

  $(`.${catygoryOfGallery}-img${numberOfImg}`).attr("src", ImagesEl[x]);
};

// RANDOM PORTFOLIO PHOTOS
randomPhotos("portfolio", "artystyczne", 1, 203);
randomPhotos("portfolio", "nocne", 2, 16);
randomPhotos("portfolio", "sprzedazowe", 3, 26);
randomPhotos("portfolio", "silniki", 4, 6);

// RANDOM EVENT PHOTOS
randomPhotos("event", "carnight2018", 1, 18);
randomPhotos("event", "ironcity2019", 2, 21);
randomPhotos("event", "ironcity2020", 3, 20);
randomPhotos("event", "moto_mikolajki", 4, 15);

///////////////////////////////////////////////////////////
// Late gallery

const galleryElsRight = document.querySelectorAll(".gallery-right");
const galleryElsIn = document.querySelectorAll(".gallery-in");
const galleryElsLeft = document.querySelectorAll(".gallery-left");
const headingEls = document.querySelectorAll(".heading-tertiary");

function timeLateGallery() {
  const maxWidth = window.matchMedia("(max-width: 38em)").matches;
  headingEls.forEach(function (headingEl) {
    headingEl.classList.remove("padding-botton-head--1");
    headingEl.classList.remove("padding-botton-head--2");
  });

  if (maxWidth) {
    galleryElsRight.forEach(function (galleryEl) {
      galleryEl.setAttribute("data-aos", "zoom-in");
      galleryEl.classList.remove("hidden");
    });
    galleryElsIn.forEach(function (galleryEl) {
      galleryEl.setAttribute("data-aos", "zoom-in");
      galleryEl.classList.remove("hidden");
    });
    galleryElsLeft.forEach(function (galleryEl) {
      galleryEl.setAttribute("data-aos", "zoom-in");
      galleryEl.classList.remove("hidden");
    });
  } else {
    galleryElsRight.forEach(function (galleryEl) {
      galleryEl.setAttribute("data-aos", "zoom-in-right");
      galleryEl.classList.remove("hidden");
    });
    galleryElsIn.forEach(function (galleryEl) {
      galleryEl.setAttribute("data-aos", "zoom-in");
      galleryEl.classList.remove("hidden");
    });
    galleryElsLeft.forEach(function (galleryEl) {
      galleryEl.setAttribute("data-aos", "zoom-in-left");
      galleryEl.classList.remove("hidden");
    });
  }

  AOS.init();
}

setTimeout(timeLateGallery, 300);

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
  setTimeout(timeLateGallery, 300);
  footerMobileEl();
});
