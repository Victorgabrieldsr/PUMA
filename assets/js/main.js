const carousel = document.querySelector('#content-carrosel');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

function goToNextSlide() {
  // Adicionando uma pequena pausa antes de aplicar a transição
  setTimeout(() => {
    carousel.style.transition = "transform 0.3s";
  }, 10);

  const firstCard = carousel.firstElementChild;
  carousel.appendChild(firstCard);
}

function goToPrevSlide() {
  // Adicionando uma pequena pausa antes de aplicar a transição
  setTimeout(() => {
    carousel.style.transition = "transform 0.3s";
  }, 10);

  const lastCard = carousel.lastElementChild;
  const firstCard = carousel.firstElementChild;
  carousel.insertBefore(lastCard, firstCard);
}

prevButton.addEventListener('click', () => {
  goToPrevSlide();
});

nextButton.addEventListener('click', () => {

  goToNextSlide();
});