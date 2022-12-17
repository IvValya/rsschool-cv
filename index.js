const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
let menuTrue = false;
let firstStart = true;

 menu.addEventListener("click", async () => {
    if (menuTrue) {
        nav.classList.remove("nav_active");
        nav.classList.add("nav");
        menu.classList.remove("nav_active");
        menu.classList.add("menu_back");
        menuTrue = false;
    }
    else{
        if (firstStart) {
            nav.classList.remove("nav");
            nav.classList.add("nav_active");
            setTimeout(() => {
                menu.classList.remove("menu");
                menu.classList.add("active");
            }, 1000);
            menuTrue = true;
            firstStart = false;
        }
        else {
            nav.classList.remove("nav");
            nav.classList.add("nav_active");
            setTimeout(() => {
                menu.classList.remove("menu_back");
                menu.classList.add("active");
            }, 1000);
            menuTrue = true;
        }
        
    }
    
});