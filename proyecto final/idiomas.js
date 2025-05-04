
document.addEventListener("DOMContentLoaded", function () {
  const idioma = localStorage.getItem("idioma") || "es";
  cargarIdioma(idioma);
  activarBandera(idioma);
});

function cargarIdioma(idioma) {
  fetch("lang.json")
    .then(res => res.json())
    .then(textos => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const clave = el.getAttribute("data-i18n");
        const contenido = textos[idioma][clave];

        if (Array.isArray(contenido)) {
          // Si es una lista, lo renderiza como <li>
          el.innerHTML = contenido.map(item => `<li>${item}</li>`).join("");
        } else if (contenido) {
          el.innerHTML = contenido;
        }
      });
    })
    .catch(error => console.error("Error al cargar los textos:", error));
}

function setLang(lang, label, flagPath) {
  localStorage.setItem("idioma", lang);
  cargarIdioma(lang);
  activarBandera(lang);
  updateFlag(lang, label, flagPath);
}

function activarBandera(lang) {
  const banderas = document.querySelectorAll(".flag-container");
  banderas.forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });
}

function updateFlag(lang, label = "", flagPath = "") {
  const flagImg = document.getElementById("flag-img");
  const langLabel = document.getElementById("lang-label");

  if (flagImg && flagPath) flagImg.src = flagPath;
  if (langLabel && label) langLabel.innerText = label;
}

const imagenes = [
  'imagenes/chute.jpg',
  'imagenes/chute2.jpg',
  'imagenes/chute3.jpg',
  'imagenes/chute4.jpg',
  'imagenes/chute5.jpg',
];

  let index = 0;
  const img = document.getElementById('imagen-principal');

  function cambiarImagen() {
    img.style.opacity = 0; // ocultar suavemente

    setTimeout(() => {
      img.src = imagenes[index];
      img.onload = () => {
        img.style.opacity = 1; // mostrar suavemente
      };
      index = (index + 1) % imagenes.length;
    }, 700); // esperar medio segundo antes de cambiar
  }

  // Iniciar
  cambiarImagen();
  setInterval(cambiarImagen, 3500); // cambiar cada 3 segundos

