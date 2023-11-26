// Seleziono la navbar
let navbar = document.querySelector("header");
let button = document.getElementById("btn-start");

// Funzione che aggiorna lo stile allo scroll
function checkScroll() {
  let scrollPosition = window.scrollY; // Ottiengo la posizione dello scroll

  if (scrollPosition > 400) {
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

const Medium = setInterval(function () {
  let m = document.querySelectorAll("g");
  m.forEach((e) => {
    let random = Math.round(Math.random() * 200);
    if (random == 2) {
      let scambio = e.innerHTML;
      e.innerHTML = "";
      const refresh = setInterval(function () {
        e.innerHTML = scambio;
      }, 1000);
    }
  });
}, 200);
