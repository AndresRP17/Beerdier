document.addEventListener("DOMContentLoaded", function () {
  const idioma = localStorage.getItem("idioma") || "es";
  cargarIdioma(idioma);
  activarBandera(idioma);
});

// Carga las traducciones del idioma seleccionado
function cargarIdioma(idioma) {
  fetch("lang.json")
    .then(res => res.json())
    .then(textos => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const claveOriginal = el.getAttribute("data-i18n");

        // Detecta si es un atributo como [placeholder]email
        const atributoMatch = claveOriginal.match(/^\[(.+)\](.+)$/);

        if (atributoMatch) {
          const atributo = atributoMatch[1]; // Ej: "placeholder"
          const clave = atributoMatch[2];    // Ej: "email"
          const contenido = textos[idioma][clave];
          if (contenido) {
            el.setAttribute(atributo, contenido);
          }
        } else {
          const contenido = textos[idioma][claveOriginal];
          if (Array.isArray(contenido)) {
            el.innerHTML = contenido.map(item => `<li>${item}</li>`).join("");
          } else if (contenido) {
            el.innerHTML = contenido;
          }
        }
      });
    })
    .catch(error => console.error("Error al cargar los textos:", error));
}

// Cambia el idioma y actualiza la bandera
function setLang(lang, label, flagPath) {
  localStorage.setItem("idioma", lang);
  cargarIdioma(lang);
  activarBandera(lang);
  updateFlag(lang, label, flagPath);
}

// Marca la bandera activa según el idioma
function activarBandera(lang) {
  const banderas = document.querySelectorAll(".flag-container");
  banderas.forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });
}

// Cambia la imagen de bandera y el nombre del idioma
function updateFlag(lang, label = "", flagPath = "") {
  const flagImg = document.getElementById("flag-img");
  const langLabel = document.getElementById("lang-label");

  if (flagImg && flagPath) flagImg.src = flagPath;
  if (langLabel && label) langLabel.innerText = label;
}

// ----- Cambio de imágenes automático -----
const imagenes = [
  'imagenes/chute.jpg',
  'imagenes/chute2.jpg',
  'imagenes/chute4.jpg',
  'imagenes/chute5.jpg',
];

let index = 0;
const img = document.getElementById('imagen-principal');

function cambiarImagen() {
  img.style.opacity = 0; // Ocultar suavemente

  setTimeout(() => {
    img.src = imagenes[index];
    img.onload = () => {
      img.style.opacity = 1; // Mostrar suavemente
    };
    index = (index + 1) % imagenes.length;
  }, 700); // Esperar antes de cambiar
}

cambiarImagen();
  setInterval(cambiarImagen, 3500); // cambiar cada 3 segundos
