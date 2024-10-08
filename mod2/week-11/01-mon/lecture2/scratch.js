class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
};


const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");
const G = new Node("G");


A.left = B;
A.right = C;
B.left = E;
B.right = D;
C.left = G;
C.right = F;




// DEPTH FIRST TRAVERSAL -> stack


const depthFirst = (root) => {

    const stack = [root];
    while(stack.length){
        // POP REMOMVES FROM THE END OF AN ARRAY
        let curr = stack.pop();

        if(curr){
            console.log(curr.val);
        }

        // iNSERT FROM RIGHT FIRST, BECAUSE WE WANT TO GO TO THE LEFT -> Stack
        if(curr.right){
            stack.push(curr.right);
        }

        if(curr.left){
            stack.push(curr.left);
        }
    }
}


// depthFirst(A); // A -> B -> E -> D -> C -> G -> F






// BREADTH FIRST TRAVERSAL -> queue (YOU GET IN LINE TO BUY "BREAD")

const breadthFirst = (root) => {

    const queue = [root];
    while(queue.length){

        // remove from the queue
        let curr = queue.shift();

        if(curr){
            console.log(curr.val);
        }

        // in a queue, we have to enter left side first, FIFO
        if(curr.left){
            queue.push(curr.left); // push to end of line
        }

        if(curr.right){
            queue.push(curr.right); // push to the end of line
        }

    }


}



breadthFirst(A); // A -> B -> C -> E -> D -> G - > F





// console.log(A);
