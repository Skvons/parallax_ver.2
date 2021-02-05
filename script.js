const translate = document.querySelectorAll('.translate');
const big_word = document.querySelector('.big-word')
const header = document.querySelector("header");
const section = document.querySelector("section");
let section_height = section.offsetHeight;
let header_height = header.offsetHeight;
const shadow = document.querySelector(".shadow");
const content = document.querySelector('.content');
const image_container = document.querySelector('.imgContainer')

// console.log(translate)
window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    // content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    // image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    // big_word.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

});


let slideIndex = 0
slides = document.querySelectorAll('.slide')
next = document.querySelector('.next');
prev = document.querySelector('.prev');
texts = document.querySelectorAll('.slide_text')

next.onclick = () => {
    if (slideIndex + 1 < slides.length) {
        slides[slideIndex].style.display = `none`;
        slides[slideIndex + 1].style.display = `block`;
        texts[slideIndex].style.display = `none`;
        texts[slideIndex + 1].style.display = `block`;
        slideIndex++;
    } else {
        slides[slides.length - 1].style.display = `none`;
        slides[0].style.display = `block`;
        texts[slides.length - 1].style.display = `none`;
        texts[0].style.display = `block`;
        slideIndex = 0;
    }
}

prev.onclick = () => {
    if (slideIndex > 0) {
        slides[slideIndex].style.display = `none`;
        slides[slideIndex - 1].style.display = `block`;
        texts[slideIndex].style.display = `none`;
        texts[slideIndex - 1].style.display = `block`;
        slideIndex--;
    } else {
        slides[0].style.display = `none`;
        slides[slides.length - 1].style.display = `block`;
        texts[0].style.display = `none`;
        texts[slides.length - 1].style.display = `block`;
        slideIndex = slides.length - 1;
    }
}