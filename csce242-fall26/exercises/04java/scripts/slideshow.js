//
document.getElementById("hero-arrow-right").onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelectorAll("#slide img") [0];
    console.log(currentSlide);
}