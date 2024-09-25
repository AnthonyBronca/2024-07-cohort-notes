
class CustomArray {
    constructor(capacity = 8){
        this.capacity = capacity;
        this.data = new Array(this.capacity);
        this.length = 0;
    }

    read(indx){
       return this.data[indx];
    }

    // add the element to the back of the array using the length -> no looping -> O(1)
    push(el){
        // when we resize -> there is a loop, that loops n number of times -> time complexity: O(n). space complexity: O(n);
        if(this.length === this.capacity){
            // throw new Error("Computer does not have enough allocated space for this action");
            // array resizing -> double the original
            this.capacity = this.capacity * 2;
            const oldInfo = this.data;
            this.data = new Array(this.capacity);
            let currIndx = 0; //
            while(currIndx !== oldInfo.length){
                this.data[currIndx] = oldInfo[currIndx];
                currIndx++
            }
            this.data[this.length] = el;

        } else{
            this.data[this.length] = el; // add to the back -> which is whatever length was
        }
        this.length ++; // increment the length for our array
        return this.length; // push returns the new length after the push
    }

    // remove from the back of the array -> no looping -> time complexity: O(1), space complexity: O(1)
    pop(){
        const el = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length --;
        return el;
    }


};

const myCustomArray = new CustomArray()

myCustomArray.push("a");
myCustomArray.push("b");
myCustomArray.push("c");
myCustomArray.push("d");
myCustomArray.push("f");
myCustomArray.push("g");
myCustomArray.push("h");
myCustomArray.push("i");
myCustomArray.push("j");
myCustomArray.push("k");
myCustomArray.push("l");
myCustomArray.push("m");
// console.log(myCustomArray.pop(), "this is pop");
console.log(myCustomArray.read(0)); // "a"

console.log(myCustomArray)





/*
The custom array will want need to do the following things:

- Start with a size of 8 - default
- read an index
- allow for `push`
- resize when full
- allow for `pop`
- allow for `unshift`
- allow for `shift`
- allow for `slice`
- ability to return the `length` of the array
- resize if capacity is full

Think about the functionality and the return value of all of these methods


*/
