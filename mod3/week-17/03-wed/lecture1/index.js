window.addEventListener("DOMContentLoaded", ()=> {


    // SELECTORS

    const spanContainers = document.getElementsByClassName("span-container")
    // getElementsByClassName -> returns a HTMLCollections

    // const spans = document.querySelectorAll("#span-2");

    // const span1 = document.getElementById("span-1");
    // const span2 = document.getElementById("span-2");
    // const span3 = document.getElementById("span-3");

    // -------------- Query Selectors ---------
    // const spanContainers =  document.querySelectorAll(".span-container");
    // quertySelectorAll -> returns a nodeList
    // querySelector selects the first one found
    // console.log(spanContainers);


    // console.log(spans);


    // EVENT LISTENERS
    // ----- smart way-----
    for(let i = 0; i < spanContainers.length; i++ ){
        let container = spanContainers[i];
        container.addEventListener("click", ()=> {
            console.log(`you clicked container: ${i + 1}`)
        })
        // console.log(container, "this is a container")
    }


    for(let i = 0; i < 9; i++){
        let currSpan = document.querySelector(`#span-${i + 1}`);
        // console.log(currSpan)
        currSpan.addEventListener("click", (e)=> {
            e.stopPropagation();
            console.log(`You clicked span: ${i + 1}`)
        })
    }


    // span1.addEventListener("click", (event)=> {
    //     event.stopPropagation();
    //     console.log("clicked span 1")
    // })

    // span2.addEventListener("click", (e)=> {
    //     console.log("clicked span 2")
    // })



    // ----- ugly way ----
    // spanContainers[0].addEventListener("click", ()=> {
    //     console.log("you clicked container 1")
    // });

    // spanContainers[1].addEventListener("click", ()=> {
    //     console.log("you clicked container 2")
    // });
    // spanContainers[2].addEventListener("click", ()=> {
    //     console.log("you clicked container 3")
    // });





})
