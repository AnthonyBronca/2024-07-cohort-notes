/*

Write a method within the Binary Search Tree Class that will allow us to search for a node.
It will take in a value and allow us to search using the absolute value


Ex:

    6
   / \
  4   10
 / \   \
1   5   12


Is 12 present? -> true
Is 18 present? -> false
Is -5 present? -> true (because we take the abs value of -5 and find 5)
*/


class TreeNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree{
    constructor(root){
        this.root = root || null;
    }

    // add method here
    searchTree(targetVal){
        const stack = [this.root];
        while(stack.length){
            let curr = stack.pop();
            // do our thing here
            if(Math.abs(curr.val) === Math.abs(targetVal)){
                return true;
            }

            if(curr.right){
                stack.push(curr.right);
            }
            if(curr.left){
                stack.push(curr.left);
            }

        }
        return false;
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

console.log(bst.searchTree(12)); // true
console.log(bst.searchTree(1)); // true
console.log(bst.searchTree(18)); // false
console.log(bst.searchTree(-12)); // true -> remember to account for abs value search
