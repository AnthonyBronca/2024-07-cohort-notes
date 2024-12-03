// how do we hook up js to html
window.addEventListener("DOMContentLoaded", ()=> {

    // GLOBAL
    if(sessionStorage.getItem("theme")){
        document.body.className = sessionStorage.getItem("theme");
    }


    // SELECTORS
    const backgroundBtn = document.getElementById("background-btn");
    // const backgroundBtn = document.querySelector("#background-btn");
    const cookieBtn = document.getElementById("cookie-set-btn");
    const deleteBtn = document.getElementById("delete-cookie-btn");
    const body = document.body;


    // Event Listeners

    // create a listener
    backgroundBtn.addEventListener("click", ()=> {

        // add the "dark-mode" class to the "body" selected item
        if(body.className === "dark-mode"){
            body.className  = "light-mode";
        } else{
            body.className  = "dark-mode";
        }

        // save the class value inside of the session storage bucket
        sessionStorage.setItem("theme", body.className)

    })

    cookieBtn.addEventListener("click", ()=> {
        const inputField = document.getElementById("cookie-setter");
        document.cookie = `pstCookie=${inputField.value}; expires= Thu, 01 Jan 2025 00:00:00 GMT`;

        inputField.value = "";
    })


    deleteBtn.addEventListener("click", ()=> {
        document.cookie = "pstCookie=Happy Thanksgiving!; expires= Thu, 01 Jan 1970 00:00:00 GMT";
    })



})
