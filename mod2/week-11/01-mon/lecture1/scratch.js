class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;

    }
}



const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");
const G = new Node("G");


A.left = B;
A.right = C;
B.right = F;
B.left = E;
C.right = G;
C.left = D;

// const depthFirst = (root) => {
//     // initialize the stack to have a start
//     const stack = [root];
//     while(stack.length){
//         // STACK: FI/ LO
//         // STACK: LI/ FO
//         let curr = stack.pop();
//         if(curr){
//             console.log(curr.val)
//         }

//         if(curr.right){
//             stack.push(curr.right);
//         }
//         if(curr.left){
//             stack.push(curr.left);
//         }
//     }

// }


const breadthFirstTraversal = (root) => {

    const queue = [root];

    while(queue.length){
        // QUEUE -> Remove from front
        // last in-> Last out
        // firs tin -> first out
        let curr = queue.shift();

        if(curr){
            console.log(curr.val);
        }

        if(curr.left){
            queue.push(curr.left);
        }

        if(curr.right){
            queue.push(curr.right);
        }





    }



}


// depthFirst(A);



breadthFirstTraversal(A);

// console.log(A);
