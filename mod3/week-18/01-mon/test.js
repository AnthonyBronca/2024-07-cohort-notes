window.addEventListener("DOMContentLoaded", ()=> {

    // GLOBAL
    if(sessionStorage.getItem("theme")){
        document.body.className = sessionStorage.getItem("theme");
    }



    // SELECTORS
    // grab the background btn
    const backgroundBtn = document.getElementById("background-btn");
    const addCookieBtn = document.getElementById("cookie-set-btn");
    const deleteCookieBtn = document.getElementById("delete-cookie-btn");
    const body = document.body;

    // const backgroundBtn = document.querySelector("#background-btn")


    // EVENT LISTENERS
    backgroundBtn.addEventListener("click", ()=> {
        // how do we add the class of dark-mode to the body
        if(body.className === "dark-mode"){
            body.className = "light-mode";
        } else {
            body.className = "dark-mode";
        }


        // set a storage
        sessionStorage.setItem("theme", body.className)

    })


    addCookieBtn.addEventListener("click", ()=> {
        const inputField = document.getElementById("cookie-setter");
        // console.log(inputField);
        document.cookie = `estCookie=${inputField.value}`;
        inputField.value = "";
    })


    deleteCookieBtn.addEventListener("click", ()=> {


        document.cookie = `estCookie=; expires = Thu, Jan 01 1970 00:00:00 GMT`;

    })



})
