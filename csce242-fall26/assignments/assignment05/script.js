document.getElementById("speech-square").onclick = (e) => {
    const bubble = document.getElementById("speech-bubble");
    bubble.style.display = "block";
    bubble.innerHTML = "Hi!";
    console.log("speech bubble created!");
}

document.getElementById("beverage-select").addEventListener("change", (e) => {
    const value = e.target.value;
    const messageDiv = document.getElementById("dropdown-message");

    if (value === "coffee") {
        messageDiv.innerHTML = "Coffee! Great Choice!";
    } else if (value === "orange-juice") {
        messageDiv.innerHTML = "Orange you glad you picked orange juice?";
    } else if (value === "matcha") {
        messageDiv.innerHTML = "Matcha is always a good option!";
    } else if (value === "tea") {
        messageDiv.innerHTML = "Sounds like you're having a par-TEA!";
    } else {
        messageDiv.innerHTML = "";
    }
});
