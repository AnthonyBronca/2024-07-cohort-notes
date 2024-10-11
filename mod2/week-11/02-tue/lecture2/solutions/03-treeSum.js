/*

Write a function, treeSum, that takes in the root of a binary tree that contains number values.
The function should return the total sum of all values in the tree.

HINT: YOU CAN USE A STACK OR A QUEUE, REMEMBER TO BE CONSISTENT THOUGH
*/

// DO NOT ALTER THIS CLASS
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*

       3
    /    \
   11     4
  / \      \
 4   -2     1

*/



// TIME COMPLEXITY:
const treeSum = (root) => {
    //  YOUR CODE HERE
    const stack = [root];
    let sum = 0;
    while(stack.length){ // O(n)
        let curr = stack.pop() // remove from the stack -> TIME COMPLEXITY: O(1) / shift -> O(n)
        sum += curr.val;

        if(curr.right){
            stack.push(curr.right); // O(1)
        }

        if(curr.left){
            stack.push(curr.left); // O(1)
        }
    }
    return sum;
}

console.log(treeSum(a)); // -> 21
