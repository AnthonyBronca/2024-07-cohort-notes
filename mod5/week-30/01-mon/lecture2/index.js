
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

// -------- FAKE REDUX --------



// ------ STEP 6 -> ACTION CREATOR --------

const getAllTweetsAction = {
    type: "GET_ALL_TWEETS",
    payload: tweets
};

const deleteATweetAction = {
    type: "DELETE_A_TWEET",
    payload: {
        id: 4,
        tweet: "Am I reduxing yet?",
        User: {
            id: 3,
            username: "thunk-monster7"
        },
        likes: 500
    },
}

// -------- STEP 7 -> REDUCER -----------


// noramlizing our state -> creating a template for what our state will look like prior to our data
let initialState = {
    byId: {},
    allTweets: []
}
// console.log(initialState, "-> before the reducer")

const fakeReducer = (state = initialState, action) => {

    // create a variable for our new state after changes are made
    let newState;

    switch(action.type){
        case "GET_ALL_TWEETS":
            // 1st line -> make a clone of the state
            newState = {...state};
            let tweets = action.payload;
            // ------ REPLACE ALL TWEETS -------
            newState.allTweets = tweets; // INDIANA JONES SWAPPPP -> backend/action creator sends us a new array anyway
            // ------- REPLACE BYID --------
            const newById = {...newState.byId};

            // go through all the tweets
            for(let tweet of tweets){
                newById[tweet.id] = tweet;
            }
            // indian jones swap
            newState.byId = newById;
            // last line of every case -> return the newState
            return newState;

        case "DELETE_A_TWEET":
            // 1st line -> clone the state
            newState = {...state};

            let tweet = action.payload;


            // --------- SWAP THE BYID --------
            let newByIdDelete = {...newState.byId};
            delete newByIdDelete[tweet.id];
            newState.byId = newByIdDelete;


            // --------- SWAP THE ALLTWEETS --------

            // const filteredAllTweets = [];

            // for(let i = 0; i < newState.allTweets.length; i++){
            //     let filteredTweet = newState.allTweets[i];
            //     if(filteredTweet.id !== tweet.id){
            //         filteredAllTweets.push(filteredTweet);
            //     }
            // }

            const filteredAllTweets = newState.allTweets.filter(filteredTweet => {
                return filteredTweet.id !== tweet.id

            })
            // indiana jones swap
            newState.allTweets = filteredAllTweets
            // last line -> return the new state
            return newState;
        default:
            return state;
    }




}


// -> this is NOT DONE IN REDUX (NOT MANUALLY) -> this is done for us by the BIG DAWG.. (store) reducer
initialState = fakeReducer(initialState, getAllTweetsAction);
console.log(initialState, "-> after the reducer")
console.log("-----------------------------------------------------------------")

initialState = fakeReducer(initialState, deleteATweetAction);

console.log(initialState, "-> after the delete")


// console.log(getAllTweetsAction)
