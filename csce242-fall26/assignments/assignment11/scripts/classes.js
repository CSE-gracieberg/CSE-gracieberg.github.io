class Vacation {
  constructor(title, place, type, description, things, image) {
    this.title = title;
    this.place = place;
    this.type = type;
    this.description = description;
    this.things = things;
    this.image = image;
  }

  getCard() {
    const card = document.createElement("div");
    card.className = "w3-container w3-third card";
    card.innerHTML = `
      <div class="location">
        <h3>${this.title}</h3>
        <p>${this.type} Vacation</p>
      </div>
      <img src="${this.image}">
    `;
    card.querySelector("img").onclick = () => this.showModal();
    return card;
  }

  showModal() {
    document.getElementById("modalTitle").innerText = this.title;
    document.getElementById("modalType").innerText = this.type;
    document.getElementById("modalText").innerText = this.description;
    document.getElementById("modalThings").innerText = this.things;
    document.getElementById("modalMap").src =
      "https://www.google.com/maps?q=" + encodeURIComponent(this.place) + "&output=embed";
    document.getElementById("modal01").style.display = "block";
  }
}
const vacations = [
  new Vacation(
    "Asheville, NC",
    "Asheville, NC",
    "Mountain",
    "A lively mountain city in the Blue Ridge Mountains known for its art scene, local breweries, and beautiful scenery.",
    "Tour the Biltmore Estate, drive the Blue Ridge Parkway, explore the River Arts District.",
    "images/Asheville.png"
  ),
  new Vacation(
    "Boone, NC",
    "Boone, NC",
    "Mountain",
    "A scenic college town in the Blue Ridge Mountains with beautiful hiking and skiing.",
    "Go skiing, visit Appalachian State University, hike Grandfather Mountain.",
    "images/Boone.png"
  ),
  new Vacation(
    "Hot Springs, NC",
    "Hot Springs, NC",
    "Mountain",
    "A small, relaxed town on the French Broad River where the Appalachian Trail runs right through downtown.",
    "Soak in the mineral hot springs, hike a section of the Appalachian Trail, go whitewater rafting.",
    "images/HotSprings.png"
  ),
  new Vacation(
    "Table Rock, SC",
    "Table Rock State Park, SC",
    "Mountain",
    "A state park in the Blue Ridge foothills, famous for its huge granite dome overlooking the valley.",
    "Hike the Table Rock Trail, swim or kayak on the lake, have a picnic with a mountain view.",
    "images/tableRock.png"
  ),
  new Vacation(
    "Kiawah, SC",
    "Kiawah Island, SC",
    "Beach",
    "A peaceful barrier island with beaches, marshes, and lots of wildlife.",
    "Bike along the beach at low tide, watch for dolphins and sea turtles, play a round of golf.",
    "images/kiawah.png"
  ),
  new Vacation(
    "Sunset Beach, NC",
    "Sunset Beach, NC",
    "Beach",
    "A quiet, family-friendly beach town with calm shores and beautiful sunsets.",
    "Look for shells, visit the Kindred Spirit Mailbox, watch the sunset from the pier.",
    "images/sunset.png"
  ),
  new Vacation(
    "Wilmington, NC",
    "Wilmington, NC",
    "Beach",
    "A historic port city on the Cape Fear River with a charming downtown and beaches just a short drive away.",
    "Walk the Riverwalk, tour the Battleship North Carolina, spend an afternoon at Wrightsville Beach.",
    "images/wilmington.png"
  ),
  new Vacation(
    "Edisto Beach, SC",
    "Edisto Beach, SC",
    "Beach",
    "A laid-back, small-town beach known for its natural, undeveloped coastline and relaxed pace.",
    "Hunt for shells and shark teeth, kayak the salt marsh, explore Edisto Beach State Park.",
    "images/Edisto.png"
  ),
];

function addCardToPage(vacation) {
  document.getElementById("vacations").appendChild(vacation.getCard());
}

vacations.forEach(addCardToPage);
document.getElementById("vacations").appendChild(boone.getCard());