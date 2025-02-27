# Redux

Redux is a state management framework that we can use coupled with `React`. It allows us to store data in the form of objects on the frontend and acts as a sort-of caching system. This way, we do not have to keep spamming our backend for data, if we already had that data from a previous retrival

Redux is made up of a few portions


## Thunk

The Thunk is responsible for 2 things!
1. The `Request`. The thunk will utilize a `fetch` to send our request to our backend.
2. The `Response` that we then get from this `fetch` will be used to `dispatch` the data to our `Action Creator`

We should use `try...catch` around our thunks, as there is always a chance that when crossing the bridge between our stack (frontend -> backend) that something goes wrong. This way, we can prevent our code from breaking when intend to send errors. Like when our backend sends a 404 error message


Example:

```js
    // THIS IS A FUNCTION IN CHARGE OF BRIDGING OUR FRONTEND AND BACKEND
export const getAllTweetsThunk = () => async (dispatch) => {
    try {
        const res = await fetch("/api/tweets"); // <- takes us to step 4
        if(res.ok){
            // The point of step 5 is to prepare our data from the backend to be stored (cached)
            //we only have data, when the we WAIT for the readable to stream to be read
            const data = await res.json();
            // send the dispatch to take us to step 6
            dispatch(getAllTweets(data));
        } else {
            throw res;
        }

    } catch (error) {
        // We may want to adjust this error to make it pretty for the frontend to display
        return error;
    }

}

```

## Action Creator & Action Types

The `Action Creator` is responsible for packaging our data up and getting it ready to be sent to a reducer. It is JUST a function that returns an `object`. The `object` has two keys. A `type` and a `payload`

THIS IS THE PREFERRED METHOD OF DOING THIS
Example 1:

```js
// ----- ACTION TYPE -----
const GET_ALL_TWEETS = "tweets/getAllTweets";
// ------- ACTION CREATOR ---------
const getAllTweets = (tweets) => ({
    type: GET_ALL_TWEETS,
    payload: tweets
});

```

Example 2:

```js
// ----- ACTION TYPE -----
const GET_ALL_TWEETS = "tweets/getAllTweets";
// ------- ACTION CREATOR ---------
const getAllTweets = (tweets) => {
    return {
        type: GET_ALL_TWEETS,
        payload: tweets
    }
};


```



Example 3:  Not recommended, but you could technically do this. Just this is often less-used in the real world

```js

// ----- ACTION TYPE -----
const GET_ALL_TWEETS = "tweets/getAllTweets";
// ------- ACTION CREATOR ---------
function getAllTweets(tweets){
    return {
        type: GET_ALL_TWEETS,
        payload: tweets
    }
};


```



## Reducer

The `reducer` is in charge of storing our `data` inside of the `store` (often, I call this the "Big Dawg" reducer or the "Grand-Daddy reducer")

The `reducer` MUST create a NEW address in memory. It is often better to NORMALIZE our data inside of the reducer to avoid issues.


When we talk about `normalization`, this refers to us being able to already have default values, and having different variations of the same data. So for example, if we need to render our data using an `id`, or if we need to render our data using an `array`

In the `initialState` we can `normalize` our state and add default values

In the example below, we can have an array of `allTweets`, which is what `findAll` returns anyways. And we can have `byIds`, which is in charge of having all the objects rendered in the form of their `ids`. This can help with performance and avoid "band-aid" fixes.

The `switch case` is basically a fancy way of doing `if ... else if` where the condition is basically the same with different comparisons. In this case, we are switching between the different `action types` we may receive. And if we encounter the action type we are looking for, we will perform the action within it. The `default` is so if our reducer gets pings but no data was triggered or changed we can persist our state as it was.

*NOTE* make sure you `export default` the reducer so that "Big Dawg" reducer can use it in `store.js`


```js
// ------ REDUCER -------
let initialState = {
    allTweets: [],
    byIds: {}
};

function tweetsReducer (state = initialState, action){
    let newState = {}; // Creating a new object for us to have a new address in memory

    switch(action.type){
        case GET_ALL_TWEETS:
                newState = {...state}; // spread out the old data to make a clone of the state

                // add our data into the normalized allTweets
                newState.allTweets = action.payload; // O(1) time ;)

                // add our data into the normalized byIds

                for(let tweet of action.payload){
                    newState.byId[tweet.id] = tweet; // adds a tweet using it's unique id as a key
                }

                return newstate;
            return newState;
        default:
            return newState;
    }
}

export default tweetsReducer;


```


### Store

`Store` is what we will be storing and grabbing all our data from. This usually happens in the `store.js` file. I jokingly like to call this the `Big Dawg` reducer or the "grand-daddy reducer" because it is in charge of handling and micro-managing all the reducers that happen in our application. But it is really just our `store`. For this, all we need to know is that we have to add any new `reducers` we may make for our application to it.

```js
// ... other imports
import sessionReducer from "./session";
import tweetsReducer from './tweets';
// THIS IS OUR STORE
const rootReducer = combineReducers({
    session: sessionReducer,
    tweets: tweetsReducer
});

// ... other code

```


## useSelector

Once data is stored in our `store` (Big Dawggg), we need a way to take it out! This is where the `useSelector` hook comes into play. We grab this `hook` from the `react-redux` library.

The whole point of this phase is to `drill down` from the store into the reducer -> piece of data we want to render

```js
// imports
import {useSelector} from 'react-redux';

// react function component
const Example = () => {

    // other hooks -> we grab it from state -> reducer -> normalized state object/array
    const exampleState = useSelector((state) => state.tweets.allTweets);

    return(
        // other react jsx stuff
    )
}


```
