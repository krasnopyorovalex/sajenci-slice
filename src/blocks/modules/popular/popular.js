import { lory } from 'lory.js';

document.addEventListener('DOMContentLoaded', function () {
    const popularSlider = document.querySelector('.popular_slider');

    if (popularSlider) {
        lory(popularSlider, {
            infinite: 1,
            slidesToScroll: 1
        });
    }
});

