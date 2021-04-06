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