
// const arr = [];


// arr.push("a"); // TIME COMPLEXITY: O(1) .length

// arr.unshift("b"); // TIME COMPLEXITY: O(n)

// console.log(arr)





// NODES HAVE THE FOLLOWING: VALUE, NEXT

// const nodeA = {
//     val: "A",
//     next: null
// }


// const nodeB = {
//     val: "B",
//     next: null
// }

// const nodeC = {
//     val: "C",
//     next: null
// }

// nodeA.next = nodeB
// nodeC.next = nodeA



// // MINIMUM NEEDS: LENGTH, HEAD
// const LinkedList = {
//     head: nodeC,
//     length: 1
// }


// console.log(LinkedList)








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
        // is the head empty || length of 0
        if(this.length === 0){
            this.head = node;
        } else if(this.length === 1){
            // is the linked list a length of 1
            node.next = this.head;
            this.head = node;
        } else {
            // is the lnked list bigger than 1
            node.next = this.head;
            this.head = node;
        }
        this.length ++;
    }


    printNodes(){
        let curr = this.head;
        while(curr){
            console.log(curr.val);
            curr = curr.next
        }
    }
}



const A = new Node("A");
const B = new Node("B");
const C = new Node("C");

const ll = new LinkedList();

// console.log(ll);
ll.addToHead(A);
ll.addToHead(C);
ll.addToHead(B);
// console.log(ll);
ll.printNodes();


// console.log(A)
// A.next = B;
// C.next = A;
// console.log(C)
