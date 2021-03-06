import toggleBurger from "./toggleBurger";


export function funcIsMob() {

    let isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (isMobile.any()) {
        const menuIcon = document.getElementById("menu__icon")
        const menuBody = document.getElementById("menu__body")
        menuIcon.classList.add("menu__icon")
        menuBody.classList.add("menu__body")

        document.body.classList.add('_touch');
        let arrow = document.querySelectorAll('.arrow');
        for (let i = 0; i < arrow.length; i++) {
            let thisLink = arrow[i];
            thisLink.addEventListener('click', function () {
                thisLink.parentElement.classList.toggle('_active')
            })
        }

    } else {
        document.body.classList.add('_pc');
    }

    const iconMenu = document.querySelector('.menu__icon')

    if (iconMenu) {
        iconMenu.addEventListener('click', () => {toggleBurger()})
    }
}
