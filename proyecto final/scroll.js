window.sr = ScrollReveal();

sr.reveal('.logo', {
  duration: 1000,
  origin: 'top',
  distance: '100px',
  opacity: 0,
  delay: 300,
  easing: 'ease-out',
  reset: false
}
);

sr.reveal('.nav', {
  duration: 1000,
  origin: 'bottom',
  distance: '100px',
  opacity: 0,
  delay: 500,
  easing: 'ease-out',
  reset: false
}
);

sr.reveal('.language-selector', {
  duration: 1000,
  origin: 'top',
  distance: '100px',
  opacity: 0,
  delay: 500,
  easing: 'ease-out',
  reset: false
}
);

sr.reveal('.img-container', {
  duration: 1000,
  origin: 'left',
  distance: '100px',
  opacity: 0,
  delay: 1000,
  easing: 'ease-out',
  reset: true
}
);

sr.reveal('.texto', {
  duration: 1000,
  origin: 'right',
  distance: '100px',
  opacity: 0,
  delay: 1000,
  easing: 'ease-out',
  reset: true
}
);

sr.reveal('.equipo', {
  duration: 1500,        // Duración de la animación
  origin: 'rigth',     // El efecto viene desde abajo
  opacity: 0,           // Comienza con opacidad 0 (invisible)
  easing: 'ease-in-out',// Transición suave
  delay: 200,           // Retraso de 200ms antes de empezar la animación
  reset: true           // Permite que la animación se repita al hacer scroll
});


sr.reveal('.carta', {
  duration: 500,
  origin: 'bottom',
  distance: '20px',
  opacity: 0,
  delay: 500,
  easing: 'ease-out',
  interval: 200, // 🔄 Efecto cascada: cada carta aparece con diferencia de 100ms
  reset: false,
  delay: 1000
});



sr.reveal('#final', {
  duration: 2000,
  origin: 'top',
  distance: '50px',
  delay: 100,
  opacity: 0,
  reset: true
});

sr.reveal('#footer', {
  duration: 2100,
  origin: 'bottom',
  distance: '50px',
  delay: 100,
  reset: true
})