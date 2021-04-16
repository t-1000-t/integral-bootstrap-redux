function closeBurger() {
    const iconMenu = document.querySelector('.menu__icon')
    const menuBody = document.querySelector('.menu__body')

    document.body.classList.remove('_lock')
    iconMenu.classList.remove('_active')
    menuBody.classList.remove('_active')
}

export default closeBurger