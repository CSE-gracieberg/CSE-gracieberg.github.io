const slides = document.querySelectorAll(".star-clip .mySlides");
const captions = document.querySelectorAll(".spotlight-caption .mySlides");
let current = 0;

function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    captions.forEach(c => c.classList.remove("active"));

    current = (index + slides.length) % slides.length;

    slides[current].classList.add("active");
    captions[current].classList.add("active");
}

document.querySelector(".next").onclick = () => showSlide(current + 1);
document.querySelector(".prev").onclick = () => showSlide(current - 1);

showSlide(0);