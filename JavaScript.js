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

function toggleCV() {
    var cvContent = document.getElementById("cv-content");
    var cvEmbed = document.getElementById("cv-embed");
    var cvLink = document.getElementById("cv");
    var languageToggle = document.getElementById("language-toggle");
    
    if (cvContent.style.display === "none") {
      cvContent.style.display = "block";
      if (languageToggle.textContent === "Switch to Spanish") {
        cvEmbed.src = "./Ivan_Alexandro_Moroz_CV_en.pdf";
        cvLink.textContent = "Hide CV";
      } else {
        cvEmbed.src = "./Ivan_Alexandro_Moroz_CV_es.pdf";
        cvLink.textContent = "Esconder CV";
      }
    } else {
      cvContent.style.display = "none";
      if (languageToggle.textContent === "Switch to Spanish") {
        cvLink.textContent = "View CV";
      } else {
        cvLink.textContent = "Ver CV";
      }
    }
  }
  
function toggleLanguage() {
    var langButton = document.getElementById("language-toggle");
  
    
    if (langButton.textContent === "Switch to Spanish") {
      
      langButton.textContent = "Cambiar al Ingles";
      replaceTextContent("en", "es");
    } else {
      
      langButton.textContent = "Switch to Spanish";
      replaceTextContent("es", "en");
    }
  }
  
  function replaceTextContent(fromLanguage, toLanguage) {
    var elements = document.querySelectorAll('[data-lang]');
  
    elements.forEach(function (element) {
      var currentText = element.textContent;
      var targetText = element.getAttribute('data-lang-' + toLanguage);
  
      
      if (element.getAttribute('data-lang') === fromLanguage) {
        
        element.textContent = targetText;
      
        element.setAttribute('data-lang-' + fromLanguage, currentText);
       
        element.setAttribute('data-lang', toLanguage);
      }
    });
  }

const footerText = document.getElementById('footer-text');

function toggleTextMutedClass() {
  if (document.body.classList.contains('dark-mode')) {
    footerText.classList.add('text-muted');
  } else {
    footerText.classList.remove('text-muted');
  }
}

toggleTextMutedClass();

themeToggle.addEventListener('click', toggleTextMutedClass);

function revealEmail(event) {
    event.preventDefault();
    var emailElement = event.target;
    var emailAddress = "AlexandroMoroz5@gmail.com";
    emailElement.href = "mailto:" + emailAddress;
    emailElement.innerText = emailAddress;
  }

  function revealPhoneNumber(event) {
    event.preventDefault();
    var phoneElement = event.target;
    var phoneNumber = "+54 011 6729-9200";
    phoneElement.href = "tel:" + phoneNumber.replace(/\s/g, "");
    phoneElement.innerText = phoneNumber;
  }

 

  