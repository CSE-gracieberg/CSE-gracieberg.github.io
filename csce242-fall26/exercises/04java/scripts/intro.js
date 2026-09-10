document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML ="Hello World";
    e.target.innerHTML="DONE!";
}
document.getElementById("link").onclick = (e) => {
    console.log("link clicked");
}

//styles when the link is clicked
document.getElementById("link").onclick = (e) => {
    e.preventDefault();//dont go to link destination
    e.target.classList.add("cool-link");
}

//ball animatoin