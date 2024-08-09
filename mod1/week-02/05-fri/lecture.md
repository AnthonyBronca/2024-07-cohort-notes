# Week 2 - Friday

## Helper Functions (RECALL)

Helper functions are functions that are intended to be used as a support. They can be used once to clean up our existing functions,
or they can be used multiple times if we need to extract some sort of functionality that is repeated for other use cases.

Let us think of a real world problem.

Imagine you work at Meta (FKA as Facebook). You are tasked with creating a function to see if the a post contains bad words.
So you write some sort of function that will iterate through the individual words and cross-reference them to see if they are banned words or not. If they are banned, you can flag the post and not allow it to be published. If the post is clean, you can allow it to be published. Sure you can write all this logic inside of one giant function, but what if you need to reuse this functionality? For example if you need to use it to check if a comment has banned words. Or text messages in Whatsapp (owned by FB), or Bios on an Instagram profile page. Instead of writing all this logic over and over into multiple functions, we can remove that functionality from the "main" function and use it as a helper function.

This is a helper function to check if the passed in str has banned words in it
```js

let bannedWords = ["apple", "banana"];

function containsBadWords(str){
    let words = str.split(" ");
    for(let word of words){
        if(bannedWords.includes(word)){
            return true;
        }
    }
    return false
}

```

Now we can reuse this functionalty across other functions. It can be used globally, or passed in.


```js
let bannedWords = ["apple", "banana"];

function containsBadWords(str){
    let words = str.split(" ");
    for(let word of words){
        if(bannedWords.includes(word)){
            return true;
        }
    }
    return false
}


function goodInstagramPost(caption){
    if(containsBadWords(caption)){
        return "Your caption contains bad words"
    } else {
        return "your post was submitted successfully"
    }
}

goodInstagramPost("Hello world!"); // "your post was submitted successfully"
goodInstagramPost("Hello apple!"); // "Your caption contains bad words"




// here we can rename the helper function by passing it in as an argument and having the parameter name be different
function editBio(bio, bannedWordsFunc){
    let newBio = "";
    if(!bannedWordsFunc(bio)){
        newBio = bio
    } else{
        return newBio;
    }
}

editBio("Hello World", containsBadWords); // "your post was submitted successfully"
editBio("Hello apple", containsBadWords); // "Your caption contains bad words"



```
