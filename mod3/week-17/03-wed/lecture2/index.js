window.addEventListener("DOMContentLoaded", ()=> {


    // SELECTORS
    const spanContainers = document.getElementsByClassName("span-container");
    // getElementsByClassName -> returns a HTMLCollection



    // -------- QUERY section ---------

    // const spanContainer = document.querySelector(".span-container");
    // querySelector -> returns the first element that is found
    // const spanContainers = document.querySelectorAll(".span-container");
    // querySelectorAll returns a nodelist
    // console.log(spanContainers[2])


    // console.log(spanContainers)

    // EVENT LISTENERS



    // ------ smart way ------


    for(let i = 1; i < 10; i++){
        const span = document.getElementById(`span-${i}`);
        span.addEventListener("click", (event)=> {
            event.stopPropagation();
            console.log(`you clicked the span: ${i}`)
        })
    }



    for(let i = 0; i < spanContainers.length; i++){
        let container = spanContainers[i];
        container.addEventListener("click", (e)=> {
            console.log(`you clicked on container: ${i + 1}`)
        })
    }





    // --------- boring tedious way ----
    // spanContainers[0].addEventListener("click", (e)=> {
    //     console.log("you clicked container 1")
    // });

    // spanContainers[1].addEventListener("click", (e)=> {
    //     console.log("you clicked container 2")
    // });

    // spanContainers[2].addEventListener("click", (e)=> {
    //     console.log("you clicked container 3");
    // })




})
