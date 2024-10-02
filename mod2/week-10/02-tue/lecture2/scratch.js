
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null; // 1 bit
        this.length = 0;
        this.tail = null; // 1 bit
    }

    // time complexity?  O(1)
    addToHead(node){
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        } else{
            // update the new node to point to old front
            node.next = this.head;
            this.head = node;

        }
        this.length++;
    }

    // ADding to tail time complexity: 1
    // enqueue
    addToTail(node){
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    // Time Complexity with tail pointer? O(1)
    findTail(){
        console.log(this.tail);
    }

    // dequeue
    removeFromHead(){
        let oldHead = this.head; // pointer - pink
        this.head = this.head.next; // update head
        oldHead.next = null; // detaches nodes
        this.length --;

    }

    // // Time Complexity: O(n)
    // findTail(){
    //     if(this.length <= 1){
    //         console.log(this.head)
    //     } else {
    //         let curr = this.head;
    //         while(curr.next){
    //             curr = curr.next;
    //         }
    //         console.log(curr);
    //     }
    // }

}



const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);

const LL = new LinkedList();
LL.addToHead(four);
LL.addToHead(three);
LL.addToHead(two);
LL.addToHead(one);
// 1 -> 2 -> 3 -> 4
// console.log(LL);
// LL.findTail();
LL.addToTail(five);
// LL.findTail();

console.log(LL);
LL.removeFromHead();
console.log(LL);

// console.log(one);
