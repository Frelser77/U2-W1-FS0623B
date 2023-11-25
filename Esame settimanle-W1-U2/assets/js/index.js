// Seleziono la navbar
let navbar = document.querySelector("header");
let button = document.getElementById("btn-start");

// Funzione che aggiorna lo stile allo scroll
function checkScroll() {
  let scrollPosition = window.scrollY; // Ottiengo la posizione dello scroll

  if (scrollPosition > 300) {
    // Se la pagina scrolla oltre Xpx, cambia il colore alla navbar
    navbar.style.backgroundColor = "white";
    navbar.style.transition = "1s";
    button.style.backgroundColor = "green";
    button.style.transition = "1s";
  } else {
    navbar.style.backgroundColor = "";
    button.style.backgroundColor = "";
  }
}

window.addEventListener("scroll", checkScroll);
