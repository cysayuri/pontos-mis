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
let dropdown = document.querySelectorAll('.menu__item--sub')
let dropdownContent = document.querySelectorAll('.menu__dropdown-content')

openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('is-active')
    menu.classList.toggle('is-active')
    menuHeader.classList.toggle('is-active')
    
    dropdownContent.forEach(elem => {
        elem.classList.remove('is-active')
    })
})

dropdown.forEach(elem => {
    let dropdownLink = elem.querySelector('.menu__dropdown-open')
    
    dropdownLink.addEventListener('click', () => {
        console.log(dropdownLink)
        dropdownContent = elem.querySelector('.menu__dropdown-content')
        dropdownContent.classList.add('is-active')
        
        console.log(dropdownContent)
        let dropdownClose = elem.querySelector('.menu__dropdown-close')
        
        dropdownClose.addEventListener('click', () => {
            dropdownContent.classList.remove('is-active')
        })
        
        openMenu.addEventListener('click', () => {
            dropdownContent.classList.remove('is-active')
        })
    })
})


/* ___ Botão de busca ___ */

const menuList = document.querySelector('.menu__list')
let search = document.querySelectorAll('.menu__search')
const searchBtn = document.querySelector('.menu__search-btn')
const searchMobile = document.querySelector('#search-mobile')

searchBtn.addEventListener('click', () => {
    search.forEach(elem => {
        elem.classList.toggle('active')
    })
    
    // menuList.classList.toggle('disabled')
})

searchMobile.addEventListener('click', () => {
    search.forEach(elem => {
        elem.classList.toggle('active')
    })
})