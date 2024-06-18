document.addEventListener("DOMContentLoaded", function () {
  // Citations
  let currentSlide = 0;
  const slides = document.querySelectorAll(".quote-slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // Change de citation toutes les 7 secondes

  // Compteur de likes
  //     const bouton = document.getElementById('clic-button');
  // const compteur = document.getElementById('compteur');
  // let nombreDeClics = 0;

  // Vérifie si le nombre de clics est déjà enregistré dans le localStorage
  if (localStorage.getItem("nombreDeClics")) {
    nombreDeClics = parseInt(localStorage.getItem("nombreDeClics"));
    compteur.textContent = nombreDeClics;
  }

  bouton.addEventListener("click", () => {
    nombreDeClics++;
    compteur.textContent = `${nombreDeClics}`;

    // Enregistre le nombre de clics dans le localStorage
    localStorage.setItem("nombreDeClics", nombreDeClics);
  });
});

// Sélection de la flèche
const backToTopButton = document.querySelector(".back-to-top");

// Fonction pour vérifier le défilement et afficher/masquer la flèche
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Fonction pour retourner en haut lorsque la flèche est cliquée
backToTopButton.addEventListener("click", (e) => {
  e.preventDefault(); // Empêche le comportement par défaut du lien

  const scrollStep = -window.scrollY / (500 / 15); // Calcul de la vitesse de défilement
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15); // Interval de temps en ms pour le défilement
});
