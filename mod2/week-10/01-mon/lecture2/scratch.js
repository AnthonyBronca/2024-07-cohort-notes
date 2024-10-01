

// let arr = [];

// arr.push("A"); // ADD TO BACK -> TIME COMPLEXITY ? O(1) .length
// // push can turn to O(N) when -> arr resizing
// arr.unshift("B"); // ADD TO THE FRONT -> Time complexity ?  O(n) to account for indices
// // resizes -> O(n)2









// const nodeA = {
//     val: "A",
//     next: null
// }

// const nodeB = {
//     val: "B",
//     next: null
// }

// const nodeC = {
//     val: "C ",
//     next: null
// }

class Node {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    addToHead(node){
        // check if there is no head/length === 0
        // check if there is only one head/length === 1
        // check if there are more than one node in the LL
        if(this.length === 0){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length ++;

    }

    printNodes(){
        let curr = this.head;
        while(curr){
            console.log(curr.val);
            curr = curr.next;
        }


        // console.log(this.head.val)
        // console.log(this.head.next.val)
        // console.log(this.head.next.next.val)


    }

}




const A = new Node("A");
const B = new Node("B");
const C = new Node("C");

const LL = new LinkedList();

LL.addToHead(A);
LL.addToHead(B);
LL.addToHead(C);
// console.log(LL);
LL.printNodes();

// console.log(nodeC)
// nodeA.next = nodeB
// nodeC.next = nodeA;


// console.log(nodeC)
