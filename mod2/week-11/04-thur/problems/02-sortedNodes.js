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

// BONUS: WHAT IS THE TIME COMPLEXITY OF THIS METHOD ?
