import { lory } from 'lory.js';

document.addEventListener('DOMContentLoaded', function () {
    const rewind_percentage = document.querySelector('.js_rewind_percentage');

    lory(rewind_percentage, {
        rewind: true,
        infinite: 1
    });
});
