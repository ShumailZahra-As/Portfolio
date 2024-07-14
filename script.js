const menu = document.querySelector("#menu");
const nav = document.querySelector(".navbar");
 

menu.onclick = () => {
    if (menu.classList.contains('bx-menu')) {
        menu.classList.remove('bx-menu');
        menu.classList.add('bx-x');
    } else {
        menu.classList.remove('bx-x');
        menu.classList.add('bx-menu');
    }
    nav.classList.toggle('active');
}

