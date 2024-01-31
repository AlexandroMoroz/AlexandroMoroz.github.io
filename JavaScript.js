var themeToggle = document.getElementById("theme-toggle");
var sunIcon = document.getElementById("sun-icon");
var moonIcon = document.getElementById("moon-icon");
var body = document.body;
const logoImg = document.getElementById("logo-img");
var offcanvas = new bootstrap.Offcanvas(
  document.getElementById("offcanvasDarkNavbar")
);

themeToggle.addEventListener("click", function () {
  if (body.classList.contains("light-mode")) {
    logoImg.src = "./logo.png";
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
  } else {
    logoImg.src = "./logo2.png";
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
  }

  offcanvas.hide();
});

let isScaled = false;

function toggleScale(image) {
  const vwp = window.innerWidth;
  const arrow = document.getElementById("top");
  if (vwp > 1000) {
    if (isScaled) {
      image.style.transform = "";
      image.style.transformOrigin = "initial";
      image.style.filter = "";
      image.style.border = "3px solid #000000";
      image.style.zIndex = "";
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
      arrow.style.marginRight = "";
    } else {
      const imgRect = image.getBoundingClientRect();
      const imgCenterX = imgRect.left + imgRect.width / 2;
      const imgCenterY = imgRect.top + imgRect.height / 2;
      const vwpX = window.innerWidth / 2;
      const vwpY = window.innerHeight / 2;

      const translateX = vwpX - imgCenterX;
      const translateY = vwpY - imgCenterY;

      image.style.transformOrigin = "center";
      image.style.transform = `translate(${translateX}px, ${translateY + 15}px) scale(3.7)`;
      image.style.filter = "blur(0)";
      image.style.border = "none";
      image.style.zIndex = "999";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "8px";

      arrow.style.marginRight = "8px";
    }
  }
  isScaled = !isScaled;
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const navbarHeight = document.getElementById("nav").offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;
  const scroll = elementPosition - navbarHeight + window.scrollY;

  window.scrollTo({
    top: scroll,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  toggleLanguage();
});
function toggleLanguage() {
  var langButton = document.getElementById("language-toggle");
  var cvLink = document.getElementById("cv");

    if (langButton.textContent === "Cambiar al Español") {
      cvLink.textContent = "Download Resume";
    } else if (langButton.textContent === "Switch to English"){
      cvLink.textContent = "Descargar CV";
    }
  

  if (langButton.textContent === "Switch to English") {
    langButton.textContent = "Cambiar al Español";
    replaceTextContent("en", "es");
    offcanvas.hide();
  } else {
    langButton.textContent = "Switch to English";
    replaceTextContent("es", "en");
    offcanvas.hide();
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
  if (document.body.classList.contains("light-mode")) {
    footerText.classList.add("text-muted");
  } else {
    footerText.classList.remove("text-muted");
  }
}

toggleTextMutedClass();

themeToggle.addEventListener("click", toggleTextMutedClass);

function downloadCV() {
  const languageToggle = document.getElementById("language-toggle");
  const cvFilename = languageToggle.textContent === "Cambiar al Español" ? "Ivan-Alexandro-Moroz-EN.pdf" : "Ivan-Alexandro-Moroz-ES.pdf";

  const downloadLink = document.getElementById("cv");
  downloadLink.setAttribute("href", "./" + cvFilename);
  downloadLink.setAttribute("download", cvFilename);
  downloadLink.setAttribute("type", "application/pdf");
  downloadLink.click;
}



document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".navbar-nav a, .navbar img, #top");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      offcanvas.hide();
    });
  });
});

function toggleMode() {
  const body = document.body;
  const logo = document.getElementById("logo");

  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    logo.src = "./logo.png";
  } else {
    logo.src = "./logo2.png";
  }
}
