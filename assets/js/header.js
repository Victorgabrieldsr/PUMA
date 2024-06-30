/// Loop para escrever automatico na caixa da nav-bar
let verificarIniciarContador = true;
function iniciarContador() {
    let caixaBusca = document.querySelector('.caixaBusca');
    const placeholderText1 = 'pesquisar';
    const placeholderText2 = 'palmeiras';
    const placeholderText3 = 'tênis';
    const placeholderText4 = 'chuteira';
    const placeholderText5 = 'tênis';
    let contador1 = 0;
    let contador2 = 0;
    let contador3 = 0;
    let contador4 = 0;
    let contador5 = 0;
    let verificarContagem = 0;
    if (verificarIniciarContador === true) {
        let intervalo1 = setInterval(function () {
            let caixaBusca = document.querySelector('.caixaBusca');
            caixaBusca.placeholder = 'pesquisar'.toUpperCase();
            verificarContagem += 300;
            if (verificarContagem == 1800) {
                verificarIniciarContador = false;
                clearInterval(intervalo1);
                iniciarContador();
            }
        }, 300);
    } else {
        let intervalo2 = setInterval(function () {
            if (contador1 <= 9) {
                contador1++;
                caixaBusca.placeholder = placeholderText1.slice(0, contador1).toUpperCase();
            } else if (contador2 <= 9) {
                contador2++;
                caixaBusca.placeholder = placeholderText2.slice(0, contador2).toUpperCase();
            } else if (contador3 <= 5) {
                contador3++;
                caixaBusca.placeholder = placeholderText3.slice(0, contador3).toUpperCase();
            } else if (contador4 <= 8) {
                contador4++;
                caixaBusca.placeholder = placeholderText4.slice(0, contador4).toUpperCase();
            } else if (contador5 <= 5) {
                contador5++;
                caixaBusca.placeholder = placeholderText5.slice(0, contador5).toUpperCase();
            } else if (contador5 >= 5) {
                contador1 = 0;
                contador2 = 0;
                contador3 = 0;
                contador4 = 0;
                contador5 = 0;
            }
        }, 280);
    }
}

window.onload = function () {
    iniciarContador();
};

/// Remove os textos e icons da nav-bar para o icon sandwich
const menuNav = document.querySelectorAll('nav ul li');
menuNav.forEach(item => {
    item.addEventListener('mouseover', () => {
        menuNav.forEach(i => i.style.opacity = '0.3');
        item.style.opacity = '1';
    });
    item.addEventListener('mouseleave', () => {
        menuNav.forEach(i => i.style.opacity = '1');
    });
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = './assets/imgs/svg/menu.svg';
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = './assets/imgs/svg/close.svg';
    }
}

// Quando o usuário rolar 20px a partir do topo da página, mostrar o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var elements = document.getElementsByClassName("button-arrow-up");
    if (elements.length > 0) {  // Check if there are any elements with the class name
        var element = elements[0];  // Get the first element from the collection
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    } else {
        console.error("No elements found with class name 'button-arrow-up'");
    }
}

// Quando o usuário clicar no botão, rolar suavemente para o topo da página
function topFunction() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
      window.requestAnimationFrame(topFunction);
      console.log(currentPosition);
      window.scrollTo(0, currentPosition - currentPosition / 12);
    }
}
