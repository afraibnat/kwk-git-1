const crochetImg = document.getElementById('crochet-image');
const crochetCircle = document.getElementById('crochet');

const bobaImg = document.getElementById('boba-image');
const bobaCircle = document.getElementById('boba');

const picnicImg = document.getElementById('picnic-image');
const picnicCircle = document.getElementById('picnic');

const readImg = document.getElementById('read-image');
const readCircle = document.getElementById('read');

const foodImg = document.getElementById('food-image');
const foodCircle = document.getElementById('food');

function displayCrochet() {
    crochetImg.style.display="block";
    bobaImg.style.display="none";
    picnicImg.style.display="none";
    readImg.style.display="none";
    foodImg.style.display="none";

    crochetCircle.innerHTML = '<ion-icon name="heart"></ion-icon>';
    bobaCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    picnicCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    readCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    foodCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
}

function displayBoba() {
    crochetImg.style.display="none";
    bobaImg.style.display="block";
    picnicImg.style.display="none";
    readImg.style.display="none";
    foodImg.style.display="none";

    crochetCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    bobaCircle.innerHTML = '<ion-icon name="heart"></ion-icon>';
    picnicCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    readCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    foodCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
}

function displayPicnic() {
    crochetImg.style.display="none";
    bobaImg.style.display="none";
    picnicImg.style.display="block";
    readImg.style.display="none";
    foodImg.style.display="none";

    crochetCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    bobaCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    picnicCircle.innerHTML = '<ion-icon name="heart"></ion-icon>';
    readCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    foodCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
}

function displayRead() {
    crochetImg.style.display="none";
    bobaImg.style.display="none";
    picnicImg.style.display="none";
    readImg.style.display="block";
    foodImg.style.display="none";

    crochetCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    bobaCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    picnicCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    readCircle.innerHTML = '<ion-icon name="heart"></ion-icon>';
    foodCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
}

function displayFood() {
    crochetImg.style.display="none";
    bobaImg.style.display="none";
    picnicImg.style.display="none";
    readImg.style.display="none";
    foodImg.style.display="block";

    crochetCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    bobaCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    picnicCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    readCircle.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    foodCircle.innerHTML = '<ion-icon name="heart"></ion-icon>';
}
