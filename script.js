window.sr = ScrollReveal();
sr.reveal('.logo', {
    duration: 2500,
    origin: 'left',
    distance: '500px'
});

sr.reveal('.content', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px',
    viewFactor: 0.2
});

sr.reveal('h1', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
    viewFactor: 0.2
});

sr.reveal('p', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
    viewFactor: 0.2
});

sr.reveal('.btn', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
    viewFactor: 0.2
});

let navWrapper = document.querySelector('.nav-wrapper'),
navToogler =  document.querySelector('.nav-toogler')

navToogler.addEventListener('click', function (event) {
navWrapper.classList.toggle('active')
})