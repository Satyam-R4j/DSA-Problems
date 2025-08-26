class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let curr = this.root;
            while (true) {
                if (val < curr.val) {
                    if (curr.left === null) {
                        curr.left = newNode;
                        return this;
                    } else {
                        curr = curr.left;
                    }
                } else {
                    if (curr.right === null) {
                        curr.right = newNode;
                        return this;
                    } else {
                        curr = curr.right;
                    }
                }
            }
        }
    }

    find(val) {
        if (this.root === null) return null;
        else {
            let curr = this.root;
            while (curr !== null) {
                if (val === curr.val) return curr;
                if (val < curr.val) curr = curr.left;
                else curr = curr.right;
            }
        }
        return null;
    }

    inOrder(node = this.root) {
        if (node === null) return null;
        this.inOrder(node.left);
        console.log(node.val);
        this.inOrder(node.right);
    }

    preOrder(node = this.root) {
        if (node === null) return null;
        console.log(node.val);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    postOrder(node = this.root) {
        if (node === null) return null;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.val);
    }

    // Level order traversal
    levelOrder(node = this.root) {
        if (node === null) return;
        let qu = [node];
        while (qu.length > 0) {
            let curr = qu.shift();
            console.log(curr.val);
            if (curr.left !== null) {
                qu.push(curr.left);
            }
            if (curr.right !== null) {
                qu.push(curr.right);
            }
        }
    }

    height(node = this.root) {
        if (node === null) return 0;
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    countNode(node = this.root) {
        if (node === null) return 0;
        let leftCount = this.countNode(node.left);
        let rightCount = this.countNode(node.right);
        return leftCount + rightCount + 1;
    }

    sum(node = this.root) {
        if (node === null) return 0;
        let leftVal = this.sum(node.left);
        let rightVal = this.sum(node.right);
        return leftVal + rightVal + node.val;
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);

// bst.levelOrder();
let height = bst.height();
console.log("the height of tree is : ", height);

let count = bst.countNode();
console.log("The number of nodes is: ", count);

let sum = bst.sum();
console.log("The sum of nodes is : ", sum);

// console.log(JSON.stringify(bst, null, 2));
