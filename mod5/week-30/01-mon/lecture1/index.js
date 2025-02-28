

const tweets = [
    {
        id: 1,
        tweet: "Hello world",
        User: {
            id: 1,
            username: "roxbox"
        },
        likes: 30
    },
    {
        id: 2,
        tweet: "I am a computer",
        User: {
            id: 1,
            username: "roxbox"
        },
        likes: 11
    },
    {
        id: 3,
        tweet: "What's going on",
        User: {
            id: 2,
            username: "cashew12"
        },
        likes: 2
    },
    {
        id: 4,
        tweet: "Am I reduxing yet?",
        User: {
            id: 3,
            username: "thunk-monster7"
        },
        likes: 500
    },

];



// ----- FAKE REDUX ------


// ----- STEP 6 -> ACTION CREATOR ------

const getAllTweetsAction = {
    type: "GET_ALL_TWEETS",
    payload: tweets
};


const deleteTweetAction = {
    type: "DELETE_A_TWEET",
    payload: {
        id: 3,
        tweet: "What's going on",
        User: {
            id: 2,
            username: "cashew12"
        },
        likes: 2
    }
}

// ------ STEP 7 -> REDUCER --------

// normalizing our state -> creating a template for where we will store our data
let initialState = {
    byId: {},
    allTweets: []
};


// fake reducer

const reducer = (state = initialState, action) => {
    // placeholder for our our new state
    let newState;

    switch (action.type) {
        case "GET_ALL_TWEETS": // what we will want to do when the action type is "Get all tweets"
            // step 1: make a copy
            newState = { ...state };
            let tweets = action.payload;
            // ---- REPLACE THE ALLTWEETS ARRAY -----
            // --> reassign the allTweets array to be the array from the backend which came from the payload
            newState.allTweets = tweets;

            // ----- REPLACE THE BYID OBJECT -----
            let newById = { ...newState.byId }; // making a copy of the byId object
            for (let tweet of tweets) {
                // create the key on the newById using the id of tweet
                newById[tweet.id] = tweet
            }
            // SWAP THE OLD BYID WITH THE NEWBYID
            newState.byId = newById;

            // the last line of any case
            return newState;


        case "DELETE_A_TWEET":
            // 1st line --- make a clone
            newState = {...state};
            const tweet = action.payload;
            //  ------ DELETE FROM THE BYID OBJECT ------
            let newByIdDeletion = {...newState.byId}; // make a clone
            delete newByIdDeletion[tweet.id]; // delete the tweet that matches the id from the tweet in our payload
            newState.byId = newByIdDeletion;


            // -------- MAKE A NEW ARRAY TO REPLACE OUR ALLTWEETS ARRAY ------ :note use filter -> it returns an array

            const filteredNewTweets = newState.allTweets.filter(filterTweets => {
                return filterTweets.id !== tweet.id
            })

            newState.allTweets = filteredNewTweets;



            // console.log(newByIdDeletion);
            // console.log(tweet);

            // last line --- return state
            return newState;
        default:
            return state;
    }


}

// console.log(initialState, "this is initial state before the action");

// ----- THIS IS NOT PART OF REDUX.. TECHNICALLY THE BIG DAWG (STORE) REDUCER HANDLES THIS FOR US.. THANKS BIG DAWG
initialState = reducer(initialState, getAllTweetsAction);

console.log(initialState, "before the delete")
console.log("----------------------------------------------------")
initialState = reducer(initialState, deleteTweetAction);
console.log(initialState, "after the delete")

// console.log(getAllTweetsAction)


// console.log(initialState.byId[4])










// console.log(tweets[0].User.username)
