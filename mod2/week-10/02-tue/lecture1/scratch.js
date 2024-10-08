
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class LinkedList {
    constructor(){
        this.head = null; // 1bit
        this.length = 0;
        this.tail = null; // 1bit
    }

    addToHead(node){
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    addToTail(node){
        this.tail.next = node;
        this.tail = node;
        this.length++;

    }

    // dequeue -> shift()
    removeFromHead(){
        if(this.length === 0){
            return;
        } else{
            let oldHead = this.head;
            this.head = this.head.next;
            oldHead.next = null;
            this.length --;
        }

    }


    findTail(){
        console.log(this.tail);
    }

    // findTail(){
    //     // O(n) -> iterate through every node to find the ending
    //     if(this.length <= 1){
    //         console.log(this.head);
    //     } else{
    //         let curr = this.head;
    //         while(curr.next){
    //             curr = curr.next
    //         }
    //         console.log(curr);
    //     }
    // }
}

const LL = new LinkedList();


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);

LL.addToHead(four);
LL.addToHead(three);
LL.addToHead(two);
LL.addToHead(one);
// console.log(LL);
// LL.findTail();
LL.addToTail(five);
// LL.findTail();
LL.removeFromHead();
LL.removeFromHead();
LL.removeFromHead();
LL.removeFromHead();
LL.removeFromHead();
LL.removeFromHead();
console.log(LL);

//  here
//    1 -> 2 - > 3 -> 4 -> null
