/// Colocar Transição e Deixar o Carrosel Movel! 
const carousel1 = document.querySelector('#content-carrosel1');
const carousel2 = document.querySelector('#content-carrosel2');

const nextButton1 = document.querySelector('#carrosel-next1');
const prevButton1 = document.querySelector('#carrosel-prev1');

const nextButton2 = document.querySelector('#carrosel-next2');
const prevButton2 = document.querySelector('#carrosel-prev2');
let isTransitioning = false;

class goToNextSlide {
  Slide(x) {
    if (isTransitioning) return;
    isTransitioning = true;

    let cardWidth = x.firstElementChild.offsetWidth;
    cardWidth = cardWidth + 16;
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
  Slide(x) {
    if (isTransitioning) return;
    isTransitioning = true;

    let cardWidth = x.firstElementChild.offsetWidth;
    cardWidth = cardWidth + 16;
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


nextButton1.addEventListener('click', () => next_slide.Slide(carousel1));
prevButton1.addEventListener('click', () => prev_slide.Slide(carousel1));

nextButton2.addEventListener('click', () => next_slide.Slide(carousel2));
prevButton2.addEventListener('click', () => prev_slide.Slide(carousel2));


///Transição de opacidade nos botoes do Carrosel
let buttonsCarrosel = document.getElementsByTagName("ion-icon");
for (let i = 0; i < buttonsCarrosel.length; i++) {
  buttonsCarrosel[i].addEventListener("mouseout", function () {
    this.style.transition = "0.3s";
  });
}

