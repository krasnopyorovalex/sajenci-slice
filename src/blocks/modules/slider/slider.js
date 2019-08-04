import { lory } from 'lory.js';

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider_percentage');

    if (slider) {
        lory(slider, {
            rewind: true,
            infinite: 1
        });
    }
});
