const VOWELS = 'aeiou';
// const abbreviateWords = function (sentence) {
//     const words = sentence.split(' ');

//     for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
//         const word = words[wordIdx];
//         if (word.length > 3) {
//             let newWord = "";
//             let charIdx = 0;

//             while (charIdx < word.length && newWord.length < 3) {
//                 let char = word[charIdx];
//                 if (!VOWELS.includes(char)) {
//                     newWord += char;
//                 }
//                 charIdx++;
//             }

//             words[wordIdx] = newWord;
//         }
//     }

//     return words.join(' ');
// };

// splitting our sentence
// checking length of words
// abbreviate a word

function abbreviate(word) {
    let newWord = "";
    let i = 0;

    while (i < word.length && newWord.length < 3) {
        let char = word[i];
        if (!VOWELS.includes(char)) {
            newWord += char;
        }
        i++;
    }

    return newWord;
}
function checkWord(word) {
    if (word.length > 3) {
        return abbreviate(word);
    } else {
        return word;
    }
}
function abbreviateWords(sentence) {
    let words = sentence.split(' ')

    for (let i = 0; i < words.length; i++) {
        words.splice(i, 1, checkWord(words[i]));
    }

    return words.join(' ')
}

console.log(abbreviateWords("hello world"))
console.log(abbreviateWords("jack and the beanstalk"))

// module.exports = abbreviateWords;

// module.exports = {
//     abbreviate,
//     abbreviateWords
// };

// module.exports.abbreviate = abbreviate;
// module.exports.abbreviateWords = abbreviateWords;

exports.abbreviate = abbreviate;
exports.abbreviateWords = abbreviateWords;