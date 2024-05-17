var themeToggle = document.getElementById("theme-toggle");
var sunIcon = document.getElementById("sun-icon");
var moonIcon = document.getElementById("moon-icon");
var body = document.body;
const logoImg = document.getElementById("logo-img");
var offcanvas = new bootstrap.Offcanvas(
  document.getElementById("offcanvasDarkNavbar")
);

// Función para cambiar entre temas de la pagina.

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

// Función para ocultar todos los elementos HTML que tengan la etiqueta "SwitchEs" cuando carga el DOM entero.

document.addEventListener("DOMContentLoaded", function () {
  var switchEsElements = document.querySelectorAll(".SwitchEs");
  for (var i = 0; i < switchEsElements.length; i++) {
    switchEsElements[i].style.display = "none";
  }
});

// Función para scrollar a la sección correspondiente.

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const navbarHeight = document.getElementById("nav").offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;
  const scroll = elementPosition - navbarHeight + window.scrollY;

  window.scrollTo({
    top: scroll,
    behavior: 'smooth'
  });
}

// Función para cambiar entre idiomas.

var slider = document.querySelector(".slider-cradle");
  var handle = slider.querySelector(".handle");

slider.addEventListener("click", function () {

    var switchEnElements = document.querySelectorAll(".SwitchEn");
    var switchEsElements = document.querySelectorAll(".SwitchEs");
    switchEnElements.forEach(function (switchEn) {
      if (switchEn.style.display === "none") {
        switchEn.style.display = "block";
      } else {
        switchEn.style.display = "none";
      }
    });
    switchEsElements.forEach(function (switchEs) {
      if (switchEs.style.display === "none") {
        switchEs.style.display = "block";
      } else {
        switchEs.style.display = "none";
      }
    });
    
    if (handle.style.transform === "translateX(50px)") {
      handle.style.transform = "translateX(0px)"
    } else {
      handle.style.transform = "translateX(50px)"
    }     
  });

const footerText = document.getElementById("footer-text");

// Función para mutear el texto del footer.

function toggleTextMutedClass() {
  if (document.body.classList.contains("light-mode")) {
    footerText.classList.add("text-muted");
  } else {
    footerText.classList.remove("text-muted");
  }
}

toggleTextMutedClass();

themeToggle.addEventListener("click", toggleTextMutedClass);

// Función para descargar el CV.

function downloadCV() {
  const languageToggle = document.getElementById("language-toggle");
  const cvFilename =
    languageToggle.textContent === "Cambiar al Español"
      ? "Ivan-Alexandro-Moroz-EN.pdf"
      : "Ivan-Alexandro-Moroz-ES.pdf";

  const downloadLink = document.getElementById("cv");
  downloadLink.setAttribute("href", "./" + cvFilename);
  downloadLink.setAttribute("download", cvFilename);
  downloadLink.setAttribute("type", "application/pdf");
  downloadLink.click;
}

// Función para cerrar el Offcanvas al hacer clic en un elemento de la barra de navegación.

document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".navbar-nav a, .navbar img, #top");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      offcanvas.hide();
    });
  });
});

// Función para cambiar entre el modo oscuro y el modo claro.

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

// Función para ver más sobre un proyecto.

function verMas(texto, imagenes, boton) {
  const imageContainer = document.getElementById(imagenes);
  imageContainer.style.display = "block";

  const over = document.getElementById(texto);
  over.style.transition = "max-height 1.5s ease-in-out";
  over.style.maxHeight = "none";

  const botonVerMas = document.getElementById(boton);

  botonVerMas.style.display = "none";
}
