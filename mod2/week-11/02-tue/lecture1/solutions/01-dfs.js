/*

Write a function called depthFirstValues.
It will take in a root node. Add all the values into an array in a Depth First order.

The function should return an array.

HINT: Consider if Depth first will use a STACK or a QUEUE

*/



// DO NOT ALTER THIS CLASS
class Node {
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}





const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


/*

     a
   /   \
  b     c
 / \     \
d   e     f


*/



const depthFirstValues = (root) => {
    // stack -> LI/FO / FI/LO
    const stack = [root];
    const res = [];
    while(stack.length){
        const currChip = stack.pop(); // remove from the end
        res.push(currChip.val); // DO THE THING YOU WANT TO DO

        if(currChip.right !== null){
            stack.push(currChip.right); // right of the node

        }

        if(currChip.left !== null){
            stack.push(currChip.left);
        }

        // currChip.left; // left of the nde

    }

    return res;


}


console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
