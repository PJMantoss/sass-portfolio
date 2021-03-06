// Select DOM elemennts
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menuBtn");
const menuNav = document.querySelector(".menuNav");
const menuBranding = document.querySelector(".menuBranding");
const navItems = document.querySelectorAll(".navItem");

// SetInitial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // set menu state
        showMenu = false;
    }
}
