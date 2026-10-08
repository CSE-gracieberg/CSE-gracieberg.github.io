const getResources = async () => {
    const url = "../json/resources.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("Error loading resources:", error);
    }
};

const getRow = (resource) => {
    const row = document.createElement("tr");
    row.dataset.id = resource._id;

    // Image
    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = "../" + resource.img_name;
    img.alt = resource.name;
    img.height = 50;
    imgCell.append(img);
    row.append(imgCell);

    //name, description, skill level
    [resource.name, resource.description, resource.skill_level].forEach((text) => {
        const cell = document.createElement("td");
        cell.textContent = text;
        row.append(cell);
    });


    const linkCell = document.createElement("td");
    const link = document.createElement("a");
    link.href = resource.link;
    const icon = document.createElement("img");
    icon.src = resource.category === "video" ? "../images/play-arrow.png" : "../images/shop.png";
    icon.alt = "Visit " + resource.name;
    icon.height = 50;
    link.append(icon);
    linkCell.append(link);
    row.append(linkCell);

    return row;
};

const showResources = async () => {
    const resources = await getResources();

    resources.forEach((resource) => {
        const bodyId = resource.category === "video" ? "video-body" : "shopping-body";
        document.getElementById(bodyId).append(getRow(resource));
    });
};

showResources();