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
    const res = [];
    const stack = [root]; // FI/LO == LI/FO
    while(stack.length){
        const lastEl = stack.pop(); // is an entire node
        res.push(lastEl.val); // just push the value of the node
        // right side first, so it is at the bottom of the stack
        if(lastEl.right){
            stack.push(lastEl.right);
        }
        // left side last, so it is at the top of the stack
        if(lastEl.left){
            stack.push(lastEl.left);
        }
    }
    return res;

}


console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
