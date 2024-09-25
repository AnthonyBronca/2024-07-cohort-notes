

class CustomArray {
    constructor(capacity = 8) {
        this.capacity = capacity;
        this.data = new Array(this.capacity);
        this.length = 0;
    }

    // Push adds to the back of the array -> No loops are present -> O(1) time complexity. O(1) space complexity
    // Push has a loop when we do array resizing
    push(el) {
        // if this condition is true -> resizing has to loop, and that is an O(N)
        if (this.length >= this.capacity) {
            // throw new Error("Not enough space to perform this action");
            this.capacity = this.capacity * 2;
            const oldData = this.data;
            this.data = new Array(this.capacity);

            let currIndex = 0;
            while (currIndex !== oldData.length) {
                this.data[currIndex] = oldData[currIndex];
                currIndex++;
            }
        }
        // add the el to the correct indext within the data
        this.data[this.length] = el;
        this.length++;
        return this.length;
    }

    // removes from the back of the array
    pop() {
        const lastEl = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastEl;
    }


}

const myCustomArray = new CustomArray();
myCustomArray.push("a");
myCustomArray.push("b");
myCustomArray.push("c");
myCustomArray.push("d");
myCustomArray.push("e");
myCustomArray.push("f");
myCustomArray.push("g");
myCustomArray.push("h");
myCustomArray.push("i");
myCustomArray.push("j");
myCustomArray.push("k");
myCustomArray.push("k");
myCustomArray.push("k");
myCustomArray.push("k");
myCustomArray.push("k");
myCustomArray.push("k"); // O(1)
myCustomArray.push("k"); // O(n)
// console.log(myCustomArray.pop());


console.log(myCustomArray)




/*

The custom array will want need to do the following things:

- Start with a size of 8
- read an index
- resize when full
- allow for `push`
- allow for `pop`
- allow for `unshift`
- allow for `shift`
- allow for `slice`
- ability to return the `length` of the array
- resize if capacity is full

Think about the functionality and the return value of all of these methods

*/
