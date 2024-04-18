var verificarIniciarContador = true;
function iniciarContador(){
    let caixaBusca = document.getElementById("caixaBusca");
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
    if(verificarIniciarContador === true){
        let intervalo1 = setInterval(function(){
            let caixaBusca = document.getElementById("caixaBusca");
            caixaBusca.placeholder = 'pesquisar'.toUpperCase();
            verificarContagem += 300;
            console.log(verificarContagem)
            if(verificarContagem == 1800){
                verificarIniciarContador = false;
                clearInterval(intervalo1);
                iniciarContador();
            }
        }, 300);
    }else{
        let intervalo2 = setInterval(function(){
            if (contador1 <=9) {
                contador1++;
                caixaBusca.placeholder = placeholderText1.slice(0, contador1).toUpperCase();      
            }else if(contador2 <=9){
                contador2++;
                caixaBusca.placeholder = placeholderText2.slice(0, contador2).toUpperCase();
            }else if(contador3 <=5){
                contador3++;
                caixaBusca.placeholder = placeholderText3.slice(0, contador3).toUpperCase();
            }else if(contador4 <=8){
                contador4++;
                caixaBusca.placeholder = placeholderText4.slice(0, contador4).toUpperCase();
            }else if(contador5 <=5){
                contador5++;
                caixaBusca.placeholder = placeholderText5.slice(0, contador5).toUpperCase();
            }else if(contador5 >= 5){
                contador1 = 0;
                contador2 = 0;
                contador3 = 0;
                contador4 = 0;
                contador5 = 0;
            }
        }, 280);
    }
}
window.onload = function(){
        iniciarContador();
};
var navMulheres = document.getElementById("mulheres");
var navMulheresHr = document.getElementById("mulheresHr");
var navHomens = document.getElementById("homens");
var navHomensHr = document.getElementById("homensHr");
var navInfantil = document.getElementById("infantil");
var navInfantilHr = document.getElementById("infantilHr");
var navEsportes = document.getElementById("esportes");
var navEsportesHr = document.getElementById("esportesHr");
var navColecoes = document.getElementById("colecoes");
var navColecoesHr = document.getElementById("colecoesHr");
var navOutlet = document.getElementById("outlet");
var navOutletHr = document.getElementById("outletHr");

navMulheres.addEventListener("mouseover", function(){
    mulheresOver();
});
navMulheres.addEventListener("mouseout", function(){
    mulheresOut();
});
function mulheresOver(){  
    navMulheres.style.opacity = "1";
    navMulheresHr.style.opacity = "1";
    navHomens.style.opacity = "0.4";
    navInfantil.style.opacity = "0.4";
    navEsportes.style.opacity = "0.4";
    navColecoes.style.opacity = "0.4";
    navOutlet.style.opacity = "0.4";
}
function mulheresOut(){  
    navMulheresHr.style.opacity = "0";
    navHomens.style.opacity = "1";
    navInfantil.style.opacity = "1";
    navEsportes.style.opacity = "1";
    navColecoes.style.opacity = "1";
    navOutlet.style.opacity = "1";
}   
navHomens.addEventListener("mouseover", function(){
    homensOver();
});
navHomens.addEventListener("mouseout", function(){
    homensOut();
});
function homensOver(){  
    navMulheres.style.opacity = "0.4";
    navHomens.style.opacity = "1";
    navHomensHr.style.opacity = "1";
    navInfantil.style.opacity = "0.4";
    navEsportes.style.opacity = "0.4";
    navColecoes.style.opacity = "0.4";
    navOutlet.style.opacity = "0.4";
    
}
function homensOut(){  
    navMulheres.style.opacity = "1";
    navHomens.style.opacity = "1";
    navHomensHr.style.opacity = "0";
    navInfantil.style.opacity = "1";
    navEsportes.style.opacity = "1";
    navColecoes.style.opacity = "1";
    navOutlet.style.opacity = "1";
}   
navInfantil.addEventListener("mouseover", function(){
    infantilOver();
});
navInfantil.addEventListener("mouseout", function(){
    infantilOut();
});
function infantilOver(){  
    navMulheres.style.opacity = "0.4";
    navHomens.style.opacity = "0.4";
    navInfantil.style.opacity = "1";
    navInfantilHr.style.opacity = "1";
    navEsportes.style.opacity = "0.4";
    navColecoes.style.opacity = "0.4";
    navOutlet.style.opacity = "0.4";
}
function infantilOut(){  
    navInfantilHr.style.opacity = "0";
    navMulheres.style.opacity = "1";
    navHomens.style.opacity = "1";
    navInfantil.style.opacity = "1";
    navEsportes.style.opacity = "1";
    navColecoes.style.opacity = "1";
    navOutlet.style.opacity = "1";
}   
navEsportes.addEventListener("mouseover", function(){
    esportesOver();
});
navEsportes.addEventListener("mouseout", function(){
    esportesOut();
});
function esportesOver(){  
    navMulheres.style.opacity = "0.4";
    navHomens.style.opacity = "0.4";
    navInfantil.style.opacity = "0.4";
    navEsportes.style.opacity = "1";
    navEsportesHr.style.opacity = "1";
    navColecoes.style.opacity = "0.4";
    navOutlet.style.opacity = "0.4";
}
function esportesOut(){  
    navEsportesHr.style.opacity = "0";
    navMulheres.style.opacity = "1";
    navHomens.style.opacity = "1";
    navInfantil.style.opacity = "1";
    navEsportes.style.opacity = "1";
    navColecoes.style.opacity = "1";
    navOutlet.style.opacity = "1";
}   
navColecoes.addEventListener("mouseover", function(){
    colecoesOver();
});
navColecoes.addEventListener("mouseout", function(){
    colecoesOut();
});
function colecoesOver(){  
    navMulheres.style.opacity = "0.4";
    navHomens.style.opacity = "0.4";
    navInfantil.style.opacity = "0.4";
    navEsportes.style.opacity = "0.4";
    navColecoes.style.opacity = "1";
    navColecoesHr.style.opacity = "1";
    navOutlet.style.opacity = "0.4";
}
function colecoesOut(){  
    navColecoesHr.style.opacity = "0";
    navMulheres.style.opacity = "1";
    navHomens.style.opacity = "1";
    navInfantil.style.opacity = "1";
    navEsportes.style.opacity = "1";
    navColecoes.style.opacity = "1";
    navOutlet.style.opacity = "1";
}   
navOutlet.addEventListener("mouseover", function(){
    outletOver();
});
navOutlet.addEventListener("mouseout", function(){
    outletOut();
});
function outletOver(){  
    navMulheres.style.opacity = "0.4";
    navHomens.style.opacity = "0.4";
    navInfantil.style.opacity = "0.4";
    navEsportes.style.opacity = "0.4";
    navColecoes.style.opacity = "0.4";
    navOutlet.style.opacity = "1";
    navOutletHr.style.opacity = "1";
}
function outletOut(){  
    navOutletHr.style.opacity = "0";
    navMulheres.style.opacity = "1";
    navHomens.style.opacity = "1";
    navInfantil.style.opacity = "1";
    navEsportes.style.opacity = "1";
    navColecoes.style.opacity = "1";
    navOutlet.style.opacity = "1";
}   




