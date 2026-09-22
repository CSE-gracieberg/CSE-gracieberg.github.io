//first loop example
document.getElementById("btn-loop").onclick = (e) => {
    const loopResult = document.getElementById("loop-result");

    for(let i = 0; i < 10; i++){
        let p = document.createElement("p");
        p.innerHTML = i;
        loopResult.append(p);
        p.classList.add("special");
        p.onclick = () => {
            console.log(`You clicked the ${i}'th element`);
        };
    }


    //looping through a range
    document.getElementById("btn-loop-range").onclick =() => {

        console.log("meow");

        const startText = document.getElementById("txt-start");
        const endText = document.getElementById("txt-end");

        if(isNaN(startText) || startText < 0 || startText >5){

        }
        
        if(isNaN(endText) || endText < 10 || endText >20){
            
        }
    }
};