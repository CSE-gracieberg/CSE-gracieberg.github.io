//colors from css (google said i needed these ?)

const carColorVars = [
"--car-color1", "--car-color2", "--car-color3", "--car-color4", "--car-color5", "--car-color6", "--car-color7", "--car-color8",

];

//create car
function createCar(topPos, leftPos, bodyColorVar, roofColorVar) {
    const car = document.createElement("div");
    car.className = "car";
    car.style.top = topPos + "px";
    car.style.left = leftPos + "px";
    const minGap = 40; 
    car.style.setProperty("--car-color3", `var(${bodyColorVar})`);
    car.style.setProperty("--car-color8", `var(${roofColorVar})`);

    const body = document.createElement("div");
    body.className = "car-body";
    const roof = document.createElement("div");
    roof.className = "car-roof";
    const window = document.createElement("div");
    window.className-"car-window";
    const frontWheel = document.createElement("div");
    frontWheel.className = "wheel front";
    const backWheel = document.createElement("div");
    backWheel.className = "wheel back";

    car.append(body, roof, frontWheel, backWheel);
    return car;
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max-min +1)) + min;
}

function addCars() {
    const road = document.getElementById("road");
    const roadWidth = road.offsetWidth;
    const carWidth= 90;

    const topLaneRange=[10,55];
    const bottomLaneRange = [95,140];
    const numOfCars = 8;
    for (let i = 0; i<numOfCars; i++)
    {
        const inTopLane = i%2 ==0;
        const laneRange = inTopLane ? topLaneRange : bottomLaneRange;

        const topPos = randomInt(laneRange[0], laneRange[1]);
        const leftPos = randomInt(0, roadWidth-carWidth);
        const bodyColorVar = carColorVars[randomInt(0, carColorVars.length - 1)];
        const roofColorVar = carColorVars[randomInt(0, carColorVars.length - 1)];
        const car = createCar(topPos, leftPos, bodyColorVar, roofColorVar);
        road.appendChild(car);

        console.log("cars are on the road!!");




    }
}

//reload and randomise cars

window.addEventListener("load", addCars);
