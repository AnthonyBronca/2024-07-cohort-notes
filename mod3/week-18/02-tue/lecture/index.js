window.addEventListener("DOMContentLoaded", ()=> {



    // SELECTORS
    const submitButton = document.querySelector(".submit-button");
    // const inputBox = document.querySelector("#input-box");
    const inputBox = document.getElementById("input-box");
    // const submitButton = document.getElementsByClassName("submit-button");
    const list = document.getElementById("students-list");
    // const list = document.querySelector("#students-list");


    // inputBox.addEventListener("focus", async (e)=> {
    //     let count = 0;
    //     const interval = setInterval(()=> {
    //         console.log("starting timer")
    //         count++;
    //         if(count === 2){
    //             clearInterval(interval);
    //             inputBox.setAttribute("disabled", "");
    //             return;
    //         } else {
    //             console.log(inputBox.value);
    //         }
    //     }, 1000);



    //     // const setTimeout(()=> {
    //     //     canType = false;
    //     // }, 5000);

    //     // if(canType){
    //     //     console.log(inputBox.value)
    //     // }


    // })

    // console.log(inputBox);

    // EVENT LISTENERS
    submitButton.addEventListener("click", async (event)=> {
        // CREATING AN ELEMENT ON SUBMIT

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputBox.value}`);
        const data = await res.json();

        for(let ability of data.abilities){
            const newListItem = document.createElement("li");
            newListItem.className = "pokemon-class-item"
            newListItem.innerText = ability.ability.name;
            list.appendChild(newListItem);

        }



        // INSERT NEWLY CREATED ITEMS INTO THE HTML


        // RESET STUFF
        inputBox.value = "";

    })


    // inputBox.addEventListener("keypress", (event) => {
    //     console.log(event);
    // })








})
