class Tutorial {
    constructor(category, level, description, lesson) {
    this.category = category;
    this.level = level;
    this.description = description;
    this.lesson = lesson;
}

    getStars() {
        return "&#9733;".repeat(this.level);
    }

    getCard() {
        const card = document.createElement("div");
        card.className = "tut-card level" + this.level;
        card.innerHTML = `
        <h3>LEVEL ${this.level}</h3>
        <p class="txt-star">${this.getStars()}</p>
        <p>${this.description}</p>
        `;
        card.onclick = () => this.showModal();
        return card;
    }

    showModal() {
        document.getElementById("tutModalTitle").innerText = this.category + " - Level " + this.level;
        document.getElementById("tutModalStars").innerHTML = this.getStars();
        document.getElementById("tutModalDescription").innerText = this.description;
        document.getElementById("tutModalLesson").innerText = this.lesson;
        document.getElementById("tutModal").style.display = "block";
    }
}

const paintingTutorials = [
    new Tutorial("Painting Basics", 1, "Learning about the different kinds of paints!", "Lesson coming soon."),
    new Tutorial("Painting Basics", 2, "Baby Steps: Putting paint on your canvas!", "Lesson coming soon."),
    new Tutorial("Painting Basics", 3, "Learn about Shading, linework, and brush control!", "Lesson coming soon."),
    new Tutorial("Painting Basics", 4, "Putting it all together to create your first piece!", "Lesson coming soon."),
];

paintingTutorials.forEach(t =>
    document.getElementById("painting-tuts").appendChild(t.getCard())
);

const anatomyTutorials = [
    new Tutorial("Anatomy", 1, "Learning about proportions to draw faces!", "Lesson coming soon."),
    new Tutorial("Anatomy", 2, "Learning the steps to draw a female body!", "Lesson coming soon."),
    new Tutorial("Anatomy", 3, "Learning the steps to draw a male body!", "Lesson coming soon."),
    new Tutorial("Anatomy", 4, "Putting it all together!", "Lesson coming soon."),
];

anatomyTutorials.forEach(t =>
    document.getElementById("anatomy-tuts").appendChild(t.getCard())
);

const colorTutorials = [
    new Tutorial("Color Theory", 1, "Learning about the different color types!", "Lesson coming soon."),
    new Tutorial("Color Theory", 2, "Learn about hues, values and saturations", "Lesson coming soon."),
    new Tutorial("Color Theory", 3, "Learning how to use colors together!", "Lesson coming soon."),
    new Tutorial("Color Theory", 4, "Introducing color Psychology!", "Lesson coming soon."),
];

colorTutorials.forEach(t =>
    document.getElementById("color-tuts").appendChild(t.getCard())
);

const landscapeTutorials = [
    new Tutorial("Landscapes", 1, "Learning value and perspective for landscapes!", "Lesson coming soon."),
    new Tutorial("Landscapes", 2, "Learning how to simplify natural elements!", "Lesson coming soon."),
    new Tutorial("Landscapes", 3, "Learn about how to set up your landscape art!", "Lesson coming soon."),
    new Tutorial("Landscapes", 4, "Putting all our methods together to make a final piece!", "Lesson coming soon."),
];

landscapeTutorials.forEach(t =>
    document.getElementById("landscapes-tuts").appendChild(t.getCard())
);