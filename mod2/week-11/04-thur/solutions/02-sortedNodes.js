/*

Write a method that will go through a Binary Search Tree, and will return an array of
all the node values sorted in descending order.

EX:
    6
   / \
  4   10
 / \   \
1   5   12

-> [12, 10, 6, 5, 4, 1]


*/


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor(root) {
        this.root = root || null;
    }

    // add method here
    sortedVals(){
        const stack = [this.root];

        // variables to keep track of to do the thing
        let res = [];

        while(stack.length){
            let curr = stack.pop();

            // do the thing
            res.push(curr.val);


            if(curr.right){
                stack.push(curr.right);
            }
            if(curr.left){
                stack.push(curr.left);
            }
        }
        return res.sort((a, b) => {
            return b - a;
        });
    }
}



const a = new TreeNode(6);
const b = new TreeNode(4);
const c = new TreeNode(1);
const d = new TreeNode(5);
const e = new TreeNode(10);
const f = new TreeNode(12);

a.left = b;
b.left = c;
b.right = d;
a.right = e;
e.right = f;

const bst = new BinarySearchTree(a);

console.log(bst.sortedVals()); // [12, 10, 6, 5, 4, 1]

// working on this for now: [6, 4, 1, 5, 10, 12]


// BONUS: WHAT IS THE TIME COMPLEXITY OF THIS METHOD ?

/*

Because we have a while loop, the method is O(n), even with a stack in place.
The sorting algo can be O(n) but likely working in O(log n ) due to mergesort / quick sort functionality under the hood
regardless, the O(n) makes the whole func O(n) time

*/
