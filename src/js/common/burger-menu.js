document.addEventListener('DOMContentLoaded', () => {
    'use strict'
    setBurgerMenu()
})

const setBurgerMenu = () => {
    const burgerMenu = document.querySelector('.burger__menu')
    const header = document.querySelector('.header')
    const headerList = document.querySelector('.header__inner')

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger__active')
        headerList.classList.toggle('open__menu')
        if (document.body.style.overflow === 'hidden') {
            document.body.style.backgroundColor = 'white'
            header.style.backgroundColor = 'inherit'
            document.body.style.overflow = 'visible'
        } else {
            document.body.style.overflow = 'hidden'
            header.style.backgroundColor = 'black'
            document.body.style.backgroundColor = 'black'
        }
    })

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1200) {
            burgerMenu.classList.remove('burger__active')
            headerList.classList.remove('open__menu')
            header.style.backgroundColor = 'inherit'
            document.body.style.backgroundColor = 'white'
            document.body.style.overflow = 'scroll'
        }
    });
}