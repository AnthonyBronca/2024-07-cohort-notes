window.addEventListener("DOMContentLoaded", ()=> {

    const leftSiren = document.querySelector(".left-siren");
    const rightSiren = document.querySelector(".right-siren");
    const button = document.querySelector("#button-thing");


    button.addEventListener("click", ()=> {
        console.log("here")
        // turn sirens off
        if(button.innerText === "Turn Sirens Off"){
            leftSiren.className = leftSiren.className.split(" ")[0];
            rightSiren.className = rightSiren.className.split(" ")[0];
            button.innerText = "Turn Sirens On"
        } else{
            // turn sirens on
            leftSiren.className += " sirens-onl"
            button.innerText = "Turn Sirens Off"
            rightSiren.className += " sirens-onr";
        }
    })



})
