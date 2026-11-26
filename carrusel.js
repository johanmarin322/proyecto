let indice = 0;

const slides = document.querySelectorAll(".slide");

function mostrarSlide(numero) {
  // Ocultar todas las diapositivas
  slides.forEach((slide) => {
    slide.classList.remove("activo");
  });

  // Mostrar la diapositiva seleccionada
  slides[numero].classList.add("activo");
}

function cambiarSlide(direccion) {
  indice = indice + direccion;

  // Si llega al final, regresar al inicio
  if (indice >= slides.length) {
    indice = 0;
  }

  // Si retrocede desde la primera, ir a la última
  if (indice < 0) {
    indice = slides.length - 1;
  }

  mostrarSlide(indice);
}
