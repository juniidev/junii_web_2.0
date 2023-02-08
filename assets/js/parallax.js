// Get elements from the DOM
// Elements from Hero Section
const sec1 = document.querySelector('.sec1');
const hero1 = document.querySelector('.hero1');
const hero2 = document.querySelector('.hero2');
const hero3 = document.querySelector('.hero3');

// Elements from Services Section
const sec2 = document.querySelector('.sec2');
const servi1 = document.querySelector('.servi1');
const servi2 = document.querySelector('.servi2');
const servi3 = document.querySelector('.servi3');

// Elements from About Section
const sec3 = document.querySelector('.sec3');
const bout1 = document.querySelector('.bout1');
const bout2 = document.querySelector('.bout2');
const bout3 = document.querySelector('.bout3');

// Sensitivity for layers
const sImg1 = 600;
const sImg2 = 1000;
const sImg3 = 2000;


sec1.addEventListener('mousemove', e => {
    // Get the x,y mouse coordinates
    const x = e.clientX;
    const y = e.clientY;

    hero1.style.transform = `
    translate(
        ${x / sImg1}%,
        ${y / sImg1}%
    )`;

    hero2.style.transform = `
    translate(
        ${x / sImg2}%,
        ${y / sImg2}%
    )`;

    hero3.style.transform = `
    translate(
        ${x / sImg3}%,
        ${y / sImg3}%
    )`;

});

sec2.addEventListener('mousemove', e => {
    // Get the x,y mouse coordinates
    const x = e.clientX;
    const y = e.clientY;

    servi1.style.transform = `
    translate(
        ${x / sImg1}%,
        ${y / sImg1}%
    )`;

    servi2.style.transform = `
    translate(
        ${x / sImg2}%,
        ${y / sImg2}%
    )`;

    servi3.style.transform = `
    translate(
        ${x / sImg3}%,
        ${y / sImg3}%
    )`;

});

sec3.addEventListener('mousemove', e => {
    // Get the x,y mouse coordinates
    const x = e.clientX;
    const y = e.clientY;

    bout1.style.transform = `
    translate(
        ${x / sImg1}%,
        ${y / sImg1}%
    )`;

    bout2.style.transform = `
    translate(
        ${x / sImg2}%,
        ${y / sImg2}%
    )`;

    bout3.style.transform = `
    translate(
        ${x / sImg3}%,
        ${y / sImg3}%
    )`;

});