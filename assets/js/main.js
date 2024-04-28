/// Colocar Transição e Deixar o Carrosel Movel! 
const carousel1 = document.querySelector('#content-carrosel1');
const carousel2 = document.querySelector('#content-carrosel2');
const carousel3 = document.querySelector('#content-carrosel3');

const nextButton1 = document.querySelector('#carrosel-next1');
const prevButton1 = document.querySelector('#carrosel-prev1');

const nextButton2 = document.querySelector('#carrosel-next2');
const prevButton2 = document.querySelector('#carrosel-prev2');

const nextButton3 = document.querySelector('#carrosel-next3');
const prevButton3 = document.querySelector('#carrosel-prev3');
let isTransitioning = false;

class goToNextSlide {
  Slide(x, y) {
    if (isTransitioning) return;
    isTransitioning = true;

    let cardWidth = x.firstElementChild.offsetWidth;
    cardWidth = cardWidth + y;
    // Clonar o primeiro slide e adicioná-lo ao final
    const clonedSlide = x.firstElementChild.cloneNode(true);
    x.appendChild(clonedSlide);

    x.style.transition = 'transform 0.5s ease';
    x.style.transform = `translateX(-${cardWidth}px)`;

    const transitionEndHandler = () => {
      // Remover o primeiro slide original após a transição
      x.removeChild(x.firstElementChild);
      x.style.transition = 'none';
      x.style.transform = 'translateX(0)';
      isTransitioning = false;
      x.removeEventListener('transitionend', transitionEndHandler);
    };

    x.addEventListener('transitionend', transitionEndHandler);
  }
}
class goToPrevSlide {
  Slide(x, y) {
    if (isTransitioning) return;
    isTransitioning = true;

    let cardWidth = x.firstElementChild.offsetWidth;
    cardWidth = cardWidth + y;
    x.style.transition = 'none';
    x.style.transform = `translateX(-${cardWidth}px)`;
    x.insertBefore(x.lastElementChild, x.firstElementChild);

    setTimeout(() => {
      x.style.transition = 'transform 0.5s';
      x.style.transform = 'translateX(0)';
    }, 10);

    const transitionEndHandler = () => {
      isTransitioning = false;
      x.removeEventListener('transitionend', transitionEndHandler);
    };

    x.addEventListener('transitionend', transitionEndHandler);
  }
}
const next_slide = new goToNextSlide();
const prev_slide = new goToPrevSlide();

nextButton1.addEventListener('click', () => next_slide.Slide(carousel1, 16));
prevButton1.addEventListener('click', () => prev_slide.Slide(carousel1, 16));

nextButton2.addEventListener('click', () => next_slide.Slide(carousel2, 16));
prevButton2.addEventListener('click', () => prev_slide.Slide(carousel2, 16));

nextButton3.addEventListener('click', () => next_slide.Slide(carousel3, 16));
prevButton3.addEventListener('click', () => prev_slide.Slide(carousel3, 16));


///Transição de opacidade nos botoes do Carrosel
let buttonsCarrosel = document.getElementsByTagName("ion-icon");
for (let i = 0; i < buttonsCarrosel.length; i++) {
  buttonsCarrosel[i].addEventListener("mouseout", function () {
    this.style.transition = "0.3s";
  });
}

let track_prev = document.querySelector(".track-prev");
let track_next = document.querySelector(".track-next");
const track_banner = document.querySelector(".track-banner");

// document.querySelector(".track-banner").addEventListener("mouseover", function () {
//   track_next.style.opacity = "1";
//   track_prev.style.opacity = "1";
//   track_next.style.transition = "0.4s";
//   track_prev.style.transition = "0.4s";
// });
// document.querySelector(".track-banner").addEventListener("mouseout", function () {
//   track_next.style.opacity = "0";
//   track_prev.style.opacity = "0";
//   track_next.style.transition = "0.4s";
//   track_prev.style.transition = "0.4s";
// });

track_prev.addEventListener('click', () => prev_slide.Slide(track_banner, 8));
track_next.addEventListener('click', () => next_slide.Slide(track_banner, 8));

