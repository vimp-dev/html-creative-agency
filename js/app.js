const toggle = document.querySelector('.js-toggle-menu');
const menu = document.querySelector(`${toggle.dataset.menu}`);

toggle.addEventListener('click', (e) => {
    menu.classList.toggle('opened');
    e.target.classList.toggle('opened');
})

const slider = new Splide('.splide', {
    pagination: false,
    type: 'fade',
    rewind: true,
}).mount();

slider.on('moved', () => {
    slider.root.querySelector('.splide__list').classList.toggle('toggle-slides');
});






















































// slider.root.querySelectorAll('.card-item').forEach(el => {
//     el.classList.remove('card-item--next', 'card-item--next2');
// });

// if(next === undefined) {
//     next = slider.root.querySelectorAll('.splide__slide')[0];
//     next2 = slider.root.querySelectorAll('.splide__slide')[1];
// }
// if(next2 === undefined) {
// //     if(e === 3) {
// //         next2 = slider.root.querySelectorAll('.splide__slide')[0];
// //     } else {
//         next2 = slider.root.querySelectorAll('.splide__slide')[0];
// //     }
// }