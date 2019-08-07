document.addEventListener("DOMContentLoaded", () => {
    const timeDuration = 300;
    const hamburger = document.querySelector(".box_catalog .btn_toggle");
    const catalog = document.querySelector(".box_catalog .btn");
    const list = document.querySelector(".box_catalog-list");

    if (hamburger && catalog) {
        hamburger.addEventListener('click', () => {
            return slideToggle(list, timeDuration);
        });

        catalog.addEventListener('click', () => {
            return slideToggle(list, timeDuration);
        });

        list.addEventListener('click', (event) => {
            let target = event.target;

            if (target.tagName === 'SPAN' || target.tagName === 'I') {
                let ul = target.closest('li').querySelector('ul');
                if (ul) {
                    return slideToggle(ul, timeDuration);
                }
            }
        });
    }

    const menuBtn = document.querySelector(".navigation nav .btn_toggle");
    const menu = document.querySelector(".navigation nav ul");
    const closeBtn = document.querySelector(".navigation .close");

    if (menuBtn) {
        const hideMenu = () => {
            slideUp(menu, timeDuration);
            window.setTimeout( () => {
                menu.classList.remove("is_open");
            }, timeDuration);
            return closeBtn.classList.remove("is_open");
        };

        menuBtn.addEventListener('click', () => {
            menu.classList.add("is_open");
            closeBtn.classList.add("is_open");
            return slideDown(menu, timeDuration);
        });

        closeBtn.addEventListener('click', () => {
            return hideMenu();
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth >= 768) {
                return hideMenu();
            }
        });
    }
});

const slideUp = (target, duration=500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
};

const slideDown = (target, duration=500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none') {
        display = 'block';
    }

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
};
const slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    }
    return slideUp(target, duration);
};
