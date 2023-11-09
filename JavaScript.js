var themeToggle = document.getElementById("theme-toggle");
var sunIcon = document.getElementById("sun-icon");
var moonIcon = document.getElementById("moon-icon");
var body = document.body;

themeToggle.addEventListener("click", function () {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
  }
});

const images = document.querySelectorAll(".zoomable-image");
let zoomedIndex = -1;

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    toggleZoom(image, index);
  });
});

function toggleZoom(image, index) {
  if (index === zoomedIndex) {
    image.classList.remove("zoomed-image");
    image.style.pointerEvents = "auto";
    zoomedIndex = -1;
  } else {
    images.forEach((otherImage, otherIndex) => {
      if (
        otherIndex !== index &&
        otherImage.classList.contains("zoomed-image")
      ) {
        otherImage.classList.remove("zoomed-image");
        otherImage.style.pointerEvents = "auto";
      }
    });
    image.classList.add("zoomed-image");
    image.style.pointerEvents = "auto";
    zoomedIndex = index;
  }
}

let prevScrollPos = window.scrollY;
const navbar = document.querySelector('.navbar');
const isMobile = window.innerWidth <= 1100;

if (isMobile) {
  window.addEventListener('scroll', function() {
    let currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
      navbar.style.transform = "translateY(0)";
    } else {
      navbar.style.transform = "translateY(-100%)";
    }

    prevScrollPos = currentScrollPos;
  });
}


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  let offset = -100;

  if (window.innerWidth < 768) {
    offset = -175;
  } else if (window.innerWidth < 1024) {
    offset = -200;
  }

  const sectionOffsetTop = section.offsetTop + offset;

  window.scrollTo({
    top: sectionOffsetTop,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  toggleLanguage();
});
function toggleLanguage() {
  var langButton = document.getElementById("language-toggle");
  var cvContent = document.getElementById("cv-content");
  var cvLink = document.getElementById("cv");

  if (cvContent.style.display === "block") {
    cvContent.style.display = "none";
    if (langButton.textContent === "Switch to Spanish") {
      cvLink.textContent = "View Resume";
    } else {
      cvLink.textContent = "Ver CV";
    }
  }

  if (langButton.textContent === "Cambiar al Ingles") {
    langButton.textContent = "Switch to Spanish";
    replaceTextContent("en", "es");
  } else {
    langButton.textContent = "Cambiar al Ingles";
    replaceTextContent("es", "en");
  }
}

function replaceTextContent(fromLanguage, toLanguage) {
  var elements = document.querySelectorAll("[data-lang]");

  elements.forEach(function (element) {
    var currentText = element.textContent;
    var targetText = element.getAttribute("data-lang-" + toLanguage);

    if (element.getAttribute("data-lang") === fromLanguage) {
      element.textContent = targetText;

      element.setAttribute("data-lang-" + fromLanguage, currentText);

      element.setAttribute("data-lang", toLanguage);
    }
  });
}

const footerText = document.getElementById("footer-text");

function toggleTextMutedClass() {
  if (document.body.classList.contains("dark-mode")) {
    footerText.classList.add("text-muted");
  } else {
    footerText.classList.remove("text-muted");
  }
}

toggleTextMutedClass();

themeToggle.addEventListener("click", toggleTextMutedClass);

function toggleCV() {
  var cvContent = document.getElementById("cv-content");
  var cvEmbed = document.getElementById("cv-embed");
  var cvLink = document.getElementById("cv");
  var languageToggle = document.getElementById("language-toggle");

  if (cvContent.style.display === "block") {
    cvContent.style.display = "none";
    if (languageToggle.textContent === "Switch to Spanish") {
      cvLink.textContent = "View Resume";
    } else {
      cvLink.textContent = "Ver CV";
    }
    return;
  }

  cvContent.style.display = "block";
  if (languageToggle.textContent === "Switch to Spanish") {
    cvEmbed.src = "./Ivan_Alexandro_Moroz_JavaDev_EN.pdf";
    cvLink.textContent = "Hide Resume";
  } else {
    cvEmbed.src = "./Ivan_Alexandro_Moroz_JavaDev_ES.pdf";
    cvLink.textContent = "Esconder CV";
  }
}
