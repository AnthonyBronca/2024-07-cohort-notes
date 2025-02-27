# Full Stack Data Flow


1. Browser -> User does some action in the browser which leads to us triggering the need for data
Example: navigating a page and needing to GET information from the backend

2. Component that is currently mounted on the browser -> This is the react file that is responsible for the page / or component that needs to access data changes
Example that: React file for a whole page, maybe a react file for just simple nav bar

----- REDUX -----

3. `Thunk` -> Is a middle man function that allows us to handle our requests (from the frontend) and our response (from the backend)

---- BACKEND ------

4. Go to the route to see how the data is being retrieved/ processed in the route/ database

-------- THUNK -------
5. Data goes back to thunk

-------- ACTION CREATOR -------
6. In charge of packaging up our data using an object with `type` and `payload`

 DONT FORGET TO MAKE AN *ACTION TYPE*!!
```js
const GET_ALL_TWEETS = "tweets/getAllTweets";

// ------- ACTION CREATOR ---------

// one way to do it -> if you want to drive anthony insane
// function getAllTweets(){
//     return {

//     }
// }
//  one way to do it -> anthony's preferred
// const getAllTweets = () => ({
//     awdmawkmd
// })

const getAllTweets = (tweets) => {
    console.log("WE ARE IN STEP 6!!",tweets)
    return {
        type: GET_ALL_TWEETS,
        payload: tweets
    }
}


```

-------- REDUCER -------
7. In charge of placing our data into the `store` (Anthony calls this Big Dawg or Grand daddy reducer)

-------- USESELECTOR -------

8. Take the data out of the `store` using the `useSelector` hook

```js
// ... imports

//                                     store.reducer.payload
const allTweets = useSelector((state) => state.tweets.allTweets);

```

-------- RENDER IN BROWSER -------
9. Render the data taken out of step 8 in the browser using react `jsx`
