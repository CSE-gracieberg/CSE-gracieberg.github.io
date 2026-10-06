const base_url = "https://portiaportia.github.io/json/fish.json";

const getFish = async() => {
    const response = await fetch(base_url);
    return response.json();

};

const showFishList = async() => {
    const fishList = await getFish();

    fishList.forEach((fish)=>{
        document.querySelector(".fish-list").append(displayFish(fish));
        displayFish(fish);
    });
};

const displayFish = (fish) => {
    const section = document.createElement("section");
    section.classList.add("fish");

    const h2 = document.createElement("h2");
    h2.innerHTML = fish.title;
    section.append(h2);
    const img = document.createElement("img");
    img.src= base_url +fish.img;
    section.append(img);

    return section;
};

showFishList();