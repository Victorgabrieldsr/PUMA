const carousel = document.querySelector('#content-carrosel');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let isTransitioning = false;

function goToNextSlide() {
  if (isTransitioning) return;
  isTransitioning = true;

  const cardWidth = carousel.firstElementChild.offsetWidth;

  carousel.style.transition = 'transform 0.4s';
  carousel.style.transform = `translateX(-${cardWidth}px)`;

  const transitionEndHandler = () => {
    carousel.appendChild(carousel.firstElementChild);
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

  const cardWidth = carousel.firstElementChild.offsetWidth;

  carousel.style.transition = 'none';
  carousel.style.transform = `translateX(-${cardWidth}px)`;
  carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);

  setTimeout(() => {
    carousel.style.transition = 'transform 0.4s';
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



let buttonsCarrosel = document.getElementsByTagName("ion-icon");
for (let i = 0; i < buttonsCarrosel.length; i++) {
  buttonsCarrosel[i].addEventListener("mouseout", function(){
    this.style.transition = "0.3s";
  });
}

