// Get elements from the DOM
// Elements from Hero Section
const sec1 = document.querySelector('.sec1');
const hero1 = document.querySelector('.el-1');
const hero2 = document.querySelector('.el-2');
const hero3 = document.querySelector('.el-3');

// Sensitivity for layers
const sImg1 = 600;
const sImg2 = 900;
const sImg3 = 700;


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
