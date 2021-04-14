const toggle = document.querySelector('.js-toggle-menu');
const menu = document.querySelector(`${toggle.dataset.menu}`);
const mainNav = document.querySelector('#main-menu');

mainNav.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
        menu.classList.remove('opened');
        toggle.target.classList.remove('opened');
    }
});

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

document.querySelectorAll('.form__input').forEach(item => {
    item.addEventListener('focus', () => {
        item.nextElementSibling.classList.add('active');
    });
    
    item.addEventListener('blur', () => {
        if(item.value.trim() === '') {
            item.nextElementSibling.classList.remove('active');
        }
    });
});