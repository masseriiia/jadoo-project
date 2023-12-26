const setBurgerMenu = () => {
    const burgerMenu = document.querySelector('.burger__menu')
    const headerList = document.querySelector('.header__inner')

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger__active')
        headerList.classList.toggle('open__menu')
        if (document.body.style.overflow === 'hidden') {
            document.body.style.overflow = ''
        } else {
            document.body.style.overflow = 'hidden'
        }


    })
}
setBurgerMenu()