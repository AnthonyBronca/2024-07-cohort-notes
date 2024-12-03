# Cookies and Local Storage


Typically, we do not want to store a lot of sensitive information on the frontend. But we can store some information on the frontend. A lot of this information will be things like session authentacation, or ads, or other tracking meta data so that companies leave almost like a tracker on your browser.


The use cases for storing data in the frontend is different than storing dating in the backend.


To view this content, you will want to use the `Google Dev Tools` and head on over the `application` tab. Make sure to select either the `cookie` section or the `session storage`/`local storage` sections

## Cookies

Cookies are small bits of information that can be stored on the front-end browser client of the user's device. This is often used for session persistance, as it can be used to retain information like if you have previously logged in and what account you used. Cookies can be cleared, and will be deleted if the browser is fully closed down. Another example for using cookies is when you want to have persistent cart data that can remember if you added cart items before/after logging in.


Cookies works similar to objects because we are storing it as a key-value pair within the browser

```js


const myFirstName = "anthony";
const myLastName = "bronca";

// add them as cookies
document.cookie = myFirstName;
document.cookie = myLastName;

console.log(document.cookie); // "myFirstName=anthony; myLastName=bronca"

```

Notice that cookie comes back as string of key-value pairs. We can dissect this string by splitting it on `; ` to get the key values, and then splitting each key value into keys and values using the `=` sign as a delimiter.


### Deleting a Cookie

To delete a cookie using JavaScript, we just have to set an expiration date or update the expiration date to be a past time. Using the previous example:


```js
const myFirstName = "anthony";
const myLastName = "bronca";

// add them as cookies
document.cookie = `firstName=${myFirstName}`;
document.cookie = `lastName=${myLastName}`;

console.log(document.cookie); // "firstName=anthony; lastName=bronca"

// delete the cookie by adding an expiration in the future

document.cookie = "firstName=; expires = Thu, 02 Jan 2025 00:00:00 GMT"

// or setting the expire to delete now
document.cookie = "lastName=; expires = Thu, 01 Jan 1970 00:00:00 GMT"

```


## Session Storage

Allows us to store data only for a given session, or until the browser window/tab is closed. This is used to store data bigger than a cookie


Let's store the value of some field item:

```js
// Get the text field that we're going to track
let field = document.getElementById("field");

// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
  field.value = sessionStorage.getItem("autosave");
}

// Listen for changes in the text field
field.addEventListener("change", function () {
  // And save the results into the session storage object
  sessionStorage.setItem("autosave", field.value);
});

```

MDN: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

## Local Storage

Stores data with no expiration date, but can be deleted when the browser cache is cleared. This has the largest storage out of all the storage types we covered so far.

It is very similar to the way we do session storage:


```js

if (!localStorage.getItem("bgcolor")) {
  populateStorage(); // adds an item to local storage -> custom function
} else {
  setStyles(); // updates the existing items -> custom function
}


// adds 3 items to local storage
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}


// gets the 3 items set previously and updates them
function setStyles() {
    // grabbing the old items
  const currentColor = localStorage.getItem("bgcolor");
  const currentFont = localStorage.getItem("font");
  const currentImage = localStorage.getItem("image");

    // sets the HTML elements to have the value of something we set before
  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = `#${currentColor}`;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}

```
