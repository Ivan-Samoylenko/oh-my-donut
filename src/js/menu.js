function toggleMenu(){
    document.querySelector(".menu-wrapper").classList.toggle("opened")
}

let oBurger = document.querySelector(".burger-menu"); //can be changed
let oClose = document.querySelector(".menu-close");

if(oBurger){
    oBurger.onclick = function(e){
        toggleMenu();
        return false;
    }
}

if(oClose){
    oClose.onclick = function(e){
        toggleMenu();
        return false;
    }
}
