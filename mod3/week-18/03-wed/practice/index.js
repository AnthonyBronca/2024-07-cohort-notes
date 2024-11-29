window.addEventListener("DOMContentLoaded", ()=> {


    const spanContainers = document.getElementsByClassName("span-container");



    for (let spanContainer of spanContainers) {
        spanContainer.addEventListener("click", (e) => {
            // e.stopPropagation();
            console.log("you clicked the span container")
        })
    }

    // let spans = [];
    for(let i = 1; i <= 12; i++ ){
        let span = document.getElementById(`span-${i}`);
        span.addEventListener("click", (e)=> {
            console.log(`You clicked the span-${i}`)
        })
        // spans.push(span);
    }

    // const span1 = document.getElementById("span-1");
    // const span2 = document.getElementById("span-2");
    // const span3 = document.getElementById("span-3");
    // const span4 = document.getElementById("span-4");


    // span4.addEventListener("click", (e)=> {
    //     // e.stopPropagation();
    //     console.log("you clicked span 4");
    // })
    // span3.addEventListener("click", (e)=> {
    //     // e.stopPropagation();
    //     console.log("you clicked span 3");
    // })
    // span2.addEventListener("click", (e)=> {
    //     // e.stopPropagation();
    //     console.log("you clicked span 2");
    // })
    // span1.addEventListener("click", (e)=> {
    //     // e.stopPropagation();
    //     console.log("you clicked span 1");
    // })




})
