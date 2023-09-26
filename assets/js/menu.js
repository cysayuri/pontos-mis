const debounce = (fn) => {    
    let frame;
    
    return (...params) => {
        if (frame) { 
            cancelAnimationFrame(frame);
        }
        
        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    } 
};


const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();


/* ___ Menu Mobile ___ */

const menuHeader = document.querySelector('#menu-mobile')
const menu = document.querySelector('.menu__content')
const openMenu = document.querySelector('.menu__burguer')

openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('is-active')
    menu.classList.toggle('is-active')
    menuHeader.classList.toggle('is-active')
})