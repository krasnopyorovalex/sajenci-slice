document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    const Counter = {
        change: (event) => {
            let target = event.target;
            let count = target.closest('.counter').querySelector('.count');

            const countInt =  parseInt(count.innerText);

            if (target.className === 'minus') {
                count.innerText = countInt <= 1
                    ? 1
                    : countInt - 1;
            }

            if (target.className === 'plus') {
                count.innerText = countInt + 1;
            }
        }
    };

    if (counters) {
        const countersLength = counters.length;

        for (let i = 0; i < countersLength; i++) {
            counters[i].addEventListener("click", Counter.change);
        }
    }
});
