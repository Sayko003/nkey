const mobileMenu = () =>{
    const burger = document.querySelector(`.mobile__burger`),
        menuWrapper = document.querySelector(`.mobile__nav`),
        menuBlock = document.querySelector(`.mobile__block`),
        overlay = document.querySelector(`.mobile__overlay`),
        close = document.querySelector(`.mobile__close`),
        links = document.querySelectorAll(`.mobile__link`),
        body = document.querySelector(`body`);

    burger.addEventListener(`click`, (e) =>{
        e.preventDefault();

        menuWrapper.classList.add(`mobile__nav_active`);
        body.style.overflow = `hidden`;
    });

    close.addEventListener(`click`, (e) =>{
        e.preventDefault();

        menuWrapper.classList.remove(`mobile__nav_active`);
        body.style.overflow = `auto`;
    });

    overlay.addEventListener(`click`, (e) =>{
        e.preventDefault();

        menuWrapper.classList.remove(`mobile__nav_active`);
        body.style.overflow = `auto`;
    });

    links.forEach(link =>{
        link.addEventListener(`click`, (e) =>{
            e.preventDefault();

            menuWrapper.classList.remove(`mobile__nav_active`);
            body.style.overflow = `auto`;
        });
    })
}

export default mobileMenu;