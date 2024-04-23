/// Colocar Transição e Deixar o Carrosel Movel! 
const carousel1 = document.querySelector('#content-carrosel1');
const carousel2 = document.querySelector('#content-carrosel2');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let isTransitioning = false;

function goToNextSlide() {
  if (isTransitioning) return;
  isTransitioning = true;

  let cardWidth = carousel.firstElementChild.offsetWidth;
  cardWidth = cardWidth + 16;
  // Clonar o primeiro slide e adicioná-lo ao final
  const clonedSlide = carousel.firstElementChild.cloneNode(true);
  carousel.appendChild(clonedSlide);

  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(-${cardWidth}px)`;

  const transitionEndHandler = () => {
    // Remover o primeiro slide original após a transição
    carousel.removeChild(carousel.firstElementChild);
    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(0)';
    isTransitioning = false;
    carousel.removeEventListener('transitionend', transitionEndHandler);
  };

  carousel.addEventListener('transitionend', transitionEndHandler);
}

function goToPrevSlide() {
  if (isTransitioning) return;
  isTransitioning = true;

  let cardWidth = carousel.firstElementChild.offsetWidth;
  cardWidth = cardWidth + 16;
  carousel.style.transition = 'none';
  carousel.style.transform = `translateX(-${cardWidth}px)`;
  carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);

  setTimeout(() => {
    carousel.style.transition = 'transform 0.5s';
    carousel.style.transform = 'translateX(0)';
  }, 10);

  const transitionEndHandler = () => {
    isTransitioning = false;
    carousel.removeEventListener('transitionend', transitionEndHandler);
  };

  carousel.addEventListener('transitionend', transitionEndHandler);
}

prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);


///Transição de opacidade nos botoes do Carrosel
let buttonsCarrosel = document.getElementsByTagName("ion-icon");
for (let i = 0; i < buttonsCarrosel.length; i++) {
  buttonsCarrosel[i].addEventListener("mouseout", function () {
    this.style.transition = "0.3s";
  });
}

