"use strict";

//////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  // Animate On Scroll Library include
  AOS.init();

  // Blocking dawnload img
  // const blockDownloadIMG = document.querySelectorAll(".img");
  // const popupImgBlock = document.querySelector(".popup-img");

  // blockDownloadIMG.forEach(function (el) {
  //   el.addEventListener("contextmenu", function (e) {
  //     e.preventDefault();
  //   });

  //   el.addEventListener("dragstart", function (e) {
  //     e.preventDefault();
  //   });
  // });

  // popupImgBlock.addEventListener("contextmenu", function (e) {
  //   e.preventDefault();
  // });

  // popupImgBlock.addEventListener("dragstart", function (e) {
  //   e.preventDefault();
  // });

  document.addEventListener("contextmenu", function (e) {
    if (
      e.target.classList.contains("img") ||
      e.target.classList.contains("popup-img")
    ) {
      e.preventDefault();
    }
  });

  document.addEventListener("dragstart", function (e) {
    if (
      e.target.classList.contains("img") ||
      e.target.classList.contains("popup-img")
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

////////////////////////////////////////////////////////////
// Add HTML code with cars img
let container, photoName;
const addImgCar = function (catygoryOfGallery, nameOfGallery, numberOfPhotos) {
  const arrNr = Array.from({ length: numberOfPhotos }, (_, i) => i + 1);

  arrNr.forEach((nr) => {
    const html = `
    <div class="gallery hidden">
              <figure class="section-gallery-item">
                <img
                  class="img section-img"
                  tabindex="0"
                  src="img/${catygoryOfGallery}/${nameOfGallery}/${nr}.webp"
                  border="0"
                  alt="${photoName} photo of realization"
                />
              </figure>
            </div>`;
    container.insertAdjacentHTML("beforeend", html);
  });
};

if (
  window.location.pathname.endsWith("/artystyczne.html") ||
  window.location.pathname.endsWith("/artystyczne")
) {
  container = document.querySelector(".artistic");
  container.innerHTML = "";
  photoName = "artistic";
  addImgCar("portfolio", "artystyczne", 203);
} else if (
  window.location.pathname.endsWith("/nocne.html") ||
  window.location.pathname.endsWith("/nocne")
) {
  container = document.querySelector(".night");
  container.innerHTML = "";
  photoName = "night";
  addImgCar("portfolio", "nocne", 16);
} else if (
  window.location.pathname.endsWith("/sprzedazowe.html") ||
  window.location.pathname.endsWith("/sprzedazowe")
) {
  container = document.querySelector(".sales");
  container.innerHTML = "";
  photoName = "sales";
  addImgCar("portfolio", "sprzedazowe", 26);
} else if (
  window.location.pathname.endsWith("/silniki.html") ||
  window.location.pathname.endsWith("/silniki")
) {
  container = document.querySelector(".engine");
  container.innerHTML = "";
  photoName = "engine";
  addImgCar("portfolio", "silniki", 6);
} else if (
  window.location.pathname.endsWith("/carnight2018.html") ||
  window.location.pathname.endsWith("/carnight2018")
) {
  container = document.querySelector(".carnight2018");
  container.innerHTML = "";
  photoName = "carnight";
  addImgCar("event", "carnight2018", 18);
} else if (
  window.location.pathname.endsWith("/ironcity2019.html") ||
  window.location.pathname.endsWith("/ironcity2019")
) {
  container = document.querySelector(".ironcity2019");
  container.innerHTML = "";
  photoName = "ironcity2019";
  addImgCar("event", "ironcity2019", 21);
} else if (
  window.location.pathname.endsWith("/ironcity2020.html") ||
  window.location.pathname.endsWith("/ironcity2020")
) {
  container = document.querySelector(".ironcity2020");
  container.innerHTML = "";
  photoName = "ironcity2020";
  addImgCar("event", "ironcity2020", 20);
} else if (
  window.location.pathname.endsWith("/moto_mikolajki.html") ||
  window.location.pathname.endsWith("/moto_mikolajki")
) {
  container = document.querySelector(".moto_mikolajki");
  container.innerHTML = "";
  photoName = "moto_mikolajki";
  addImgCar("event", "moto_mikolajki", 15);
}

///////////////////////////////////////////////////////////
// Late gallery

const galleryEls = document.querySelectorAll(".gallery");
const buttonEl = document.querySelector(".btn-box");
const headingEl = document.querySelector(".heading-secondary");

function timeLateGallery() {
  buttonEl.setAttribute("data-aos", "zoom-in");
  buttonEl.classList.remove("hidden");
  headingEl.classList.remove("padding-botton");
  galleryEls.forEach(function (galleryEl) {
    galleryEl.setAttribute("data-aos", "zoom-in");
    galleryEl.classList.remove("hidden");
  });
  AOS.init();
}

setTimeout(timeLateGallery, 300);

///////////////////////////////////////////////////////////
// OPEN GALLERY

const sectionGalleryItemEl = document.querySelectorAll(
  ".section-gallery-item img"
);
const PopupEl = document.querySelector(".popup");
const PopupCloseEl = document.querySelector(".popup-close");
const PopupImgEl = document.querySelector(".popup-img");
const arrowLeftEl = document.querySelector(".popup-arrow--left");
const arrowRightEl = document.querySelector(".popup-arrow--right");
const footerEl = document.querySelectorAll(".footer a");
const btnBoxEl = document.querySelectorAll(".btn-box a");
const navEl = document.querySelectorAll(".main-nav-list a");

let currentImgIndex;

const showNextImg = function () {
  if (currentImgIndex === sectionGalleryItemEl.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  PopupImgEl.src = sectionGalleryItemEl[currentImgIndex].src;
};

const showPreviousImg = function () {
  if (currentImgIndex === 0) {
    currentImgIndex = sectionGalleryItemEl.length - 1;
  } else {
    currentImgIndex--;
  }
  PopupImgEl.src = sectionGalleryItemEl[currentImgIndex].src;
};

const closePopup = function () {
  PopupEl.classList.add("popup-fade-out");
  const tabIndexOn = function (element) {
    element.setAttribute("tabindex", 0);
  };
  setTimeout(function () {
    PopupEl.classList.add("hidden");
    PopupEl.classList.remove("popup-fade-out");
    navEl.forEach(tabIndexOn);
    sectionGalleryItemEl.forEach(tabIndexOn);
    footerEl.forEach(tabIndexOn);
    btnBoxEl.forEach(tabIndexOn);
  }, 400);
};

sectionGalleryItemEl.forEach(function (sectionGalleryItem, index) {
  const tabIndexOff = function (element) {
    element.setAttribute("tabindex", -1);
  };
  const showPopup = function (event) {
    PopupEl.classList.remove("hidden");
    PopupImgEl.src = event.target.src;
    currentImgIndex = index;
    navEl.forEach(tabIndexOff);
    sectionGalleryItemEl.forEach(tabIndexOff);
    footerEl.forEach(tabIndexOff);
    btnBoxEl.forEach(tabIndexOff);
  };

  sectionGalleryItem.addEventListener("click", showPopup);

  sectionGalleryItem.addEventListener("keydown", function (event) {
    if (event.code === "Enter" || event.keyCode === 13) {
      showPopup(event);
    }
  });
});

PopupCloseEl.addEventListener("click", closePopup);

arrowRightEl.addEventListener("click", showNextImg);

arrowLeftEl.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", function (event) {
  if (!PopupEl.classList.contains("hidden")) {
    if (event.code === "ArrowRight" || event.keyCode === 39) {
      showNextImg();
    }
    if (event.code === "ArrowLeft" || event.keyCode === 37) {
      showPreviousImg();
    }

    if (event.code === "Escape" || event.keyCode === 27) {
      closePopup();
    }
  }
});
PopupEl.addEventListener("click", function (event) {
  if (event.target === PopupEl) {
    closePopup();
  }
});

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
