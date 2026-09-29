//
document.getElementById("hero-arrow-right").onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelectorAll("#slides :not(.hidden)");
    let nextSlide = currentSlide.nextElementSibling;

if(nextSlide ==null){
    nextSlide = document.querySelector("#slides :first-child");
}

    currentSlide.classList.add("hidden");
    
};

const getCurrentSlide = () => {
    return document.querySelector("#slides :not(.hidden)");
}

if(nextSlide ==null){
    nextSlide = document.querySelector("#slides :first-child");
}

    currentSlide.classList.add("hidden");

const slide =(currentSlide, nextSlide) => {
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
}