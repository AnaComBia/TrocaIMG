
let imagens = document.querySelectorAll('#allimg img');
let qtImgs = imagens.length;
let imgAtual = 0;

function change () {

    imagens[imgAtual].classList.remove("aparece")

    imgAtual++

    if (imgAtual >= qtImgs) {
        imgAtual = 0
    }

    imagens[imgAtual].classList.add("aparece")

};

