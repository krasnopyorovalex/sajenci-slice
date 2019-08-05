document.addEventListener("DOMContentLoaded", () => {
    const callbackBtn = document.querySelector("header .callback");
    const closeBtn = document.querySelector(".form_callback-popup .close");
    const callbackFormPopup = ".form_callback-popup";

    if (callbackBtn) {
        callbackBtn.addEventListener('click', () => {
            return fadeIn(callbackFormPopup);
        });
        closeBtn.addEventListener('click', () => {
            return fadeOut(callbackFormPopup);
        });

    }
});

function fadeOut(el) {

    let opacity = 1;

    let timer = setInterval(function() {

        if(opacity <= 0.01) {

            clearInterval(timer);
            document.querySelector(el).style.display = "none";

        }

        document.querySelector(el).style.opacity = opacity;

        opacity -= opacity * 0.1;

    }, 10);
}

function fadeIn(el) {

    let opacity = 0.01;

    document.querySelector(el).style.display = "block";

    let timer = setInterval(function() {

        if(opacity >= 1) {

            clearInterval(timer);

        }

        document.querySelector(el).style.opacity = opacity;

        opacity += opacity * 0.5;

    }, 10);
}
