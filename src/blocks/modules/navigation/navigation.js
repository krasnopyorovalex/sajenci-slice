import * as utils from '../../../js/import/utils';

document.addEventListener("DOMContentLoaded", () => {
    const timeDuration = 300;
    const hamburger = document.querySelector(".box_catalog .btn_toggle");
    const catalog = document.querySelector(".box_catalog .btn");
    const list = document.querySelector(".box_catalog-list");

    if (hamburger && catalog) {
        hamburger.addEventListener('click', () => {
            return utils.slideToggle(list, timeDuration);
        });

        catalog.addEventListener('click', () => {
            return utils.slideToggle(list, timeDuration);
        });

        list.addEventListener('click', (event) => {
            let target = event.target;

            if (target.tagName === 'SPAN' || target.tagName === 'I') {
                let ul = target.closest('li').querySelector('ul');
                if (ul) {
                    return utils.slideToggle(ul, timeDuration);
                }
            }
        });
    }

    const menuBtn = document.querySelector(".navigation nav .btn_toggle");
    const menu = document.querySelector(".navigation nav ul");
    const closeBtn = document.querySelector(".navigation .close");

    if (menuBtn) {
        const hideMenu = () => {
            utils.slideUp(menu, timeDuration);
            window.setTimeout( () => {
                menu.classList.remove("is_open");
            }, timeDuration);
            return closeBtn.classList.remove("is_open");
        };

        menuBtn.addEventListener('click', () => {
            menu.classList.add("is_open");
            closeBtn.classList.add("is_open");
            return utils.slideDown(menu, timeDuration);
        });

        closeBtn.addEventListener('click', () => {
            return hideMenu();
        });

        window.addEventListener("resize", () => {
            if (menu.className === 'is_open' && window.innerWidth >= 768) {
                return hideMenu();
            }
        });
    }
});
