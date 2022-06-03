window.dataIndex = 0;
window.data = [
{
        stars: 5,
        name: 'Will',
        review: 'Last time I have visited a cooking course by Eva I was impressed with the way she explained everything to people. You can be sure you will manage to cook a delicious dish even if it is your first time in the kitchen! Thank you so much for the masterclass! Looking forward to the next one and highly recommend it to everyone!'
    },
    {
        stars: 5,
        name: 'Elisabeth',
        review: 'Everything is great'
    },
    {
        stars: 4,
        name: 'John',
        review: 'Everything is fine. I want to try something completely different'
    },
];

let allImages = document.querySelectorAll(".reviews__hidden picture");
for (let i = 0; i < allImages.length; i++){
    window.data[i].picture = allImages[i];
}

function nextIndex(plus){
    window.dataIndex += plus;
    if (window.dataIndex >= window.data.length){
        window.dataIndex = 0;
    }
    if (window.dataIndex < 0){
        window.dataIndex = window.data.length-1;
    }
}

function draw(){
    nextIndex(-1);
    let imgContainer = document
        .querySelector(".reviews__button--left .reviews__photo-wrapper");
    let stars = document
        .querySelectorAll(".reviews__button--left svg");
    let personName = document
        .querySelector(".reviews__button--left .reviews__article-title");
    let rText = "";
    imgContainer.innerHTML = '';
    imgContainer.appendChild(window.data[window.dataIndex].picture);

    for(let i = 0; i < stars.length; i++){
        if (i < window.data[window.dataIndex].stars){
            stars[i].classList.toggle('star-active', true);
            continue;
        }
        stars[i].classList.toggle('star-active', false);
    }
    personName.innerText = window.data[window.dataIndex].name;

    nextIndex(1);
    imgContainer = document
        .querySelector(".reviews__article .reviews__photo-wrapper");
    stars = document
        .querySelectorAll(".reviews__article svg");
    personName = document
        .querySelector(".reviews__article  .reviews__article-title");
    rText = document.querySelector(".reviews__text");
    imgContainer.innerHTML = '';
    imgContainer.appendChild(window.data[window.dataIndex].picture);
    for(let i = 0; i < stars.length; i++){
        if (i < window.data[window.dataIndex].stars){
            stars[i].classList.toggle('star-active', true);
            continue;
        }
        stars[i].classList.toggle('star-active', false);
    }
    personName.innerText = window.data[window.dataIndex].name;
    rText.innerText = window.data[window.dataIndex].review;
    
    nextIndex(1);
    imgContainer = document
        .querySelector(".reviews__button--right .reviews__photo-wrapper");
    stars = document
        .querySelectorAll(".reviews__button--right svg");
    personName = document
        .querySelector(".reviews__button--right .reviews__article-title");
    imgContainer.innerHTML = '';
    imgContainer.appendChild(window.data[window.dataIndex].picture);

    for(let i = 0; i < stars.length; i++){
        if (i < window.data[window.dataIndex].stars){
            stars[i].classList.toggle('star-active', true);
            continue;
        }
        stars[i].classList.toggle('star-active', false);
    }
    personName.innerText = window.data[window.dataIndex].name;
    nextIndex(-1);
    document.querySelector(".reviews__pager-nav--main")
        .innerText = (window.dataIndex+1) + ' / ' + (window.data.length)
}

draw();
let rightButtons = document
    .querySelectorAll(".reviews__button--right,.reviews__pager-nav--right,.reviews__pager-nav--main");
for (let i = 0 ; i < rightButtons.length; i++){
    rightButtons[i].onclick = function(e){
        nextIndex(1);
        draw();
        return false;
    }
}
let leftButtons = document
    .querySelectorAll(".reviews__button--left,.reviews__pager-nav--left");
for (let i = 0 ; i < leftButtons.length; i++){
    leftButtons[i].onclick = function(e){
        nextIndex(-1);
        draw();
        return false;
    }
}

///////////////////////////////////

let burgerMenu = document.querySelector(".burger-menu");
let burgerMenuClose = document.querySelector(".menu-close");

if (burgerMenu){
    burgerMenu.onclick = function(){
        document.querySelector(".menu-wrapper").classList.toggle("opened");
        return false;
    }
}

if (burgerMenuClose){
    burgerMenuClose.onclick = function(){
        document.querySelector(".menu-wrapper").classList.toggle("opened");
        return false;
    }
}

let links = document.querySelectorAll('.nav__link');
let linkOnclick = function(){ 
    document.querySelector(".menu-wrapper").classList.toggle("opened"); 
    return true; 
}
for (let i = 0; i < links.length; i++){
    links[i].onclick = linkOnclick;
}