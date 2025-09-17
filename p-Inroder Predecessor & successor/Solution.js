// Node structure
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function rightMostInLeftSubTree(root) {
    let ans = null;
    while (root !== null) {
        ans = root;
        root = root.right;
    }
    return ans;
}

function leftMostInRightSubTree(root) {
    let ans = null;
    while (root !== null) {
        ans = root;
        root = root.left;
    }
    return ans;
}

function getPredSuss(root, key) {
    let curr = root;
    let pred = null;
    let succ = null;

    while (curr !== null) {
        if (key < curr.val) {
            succ = curr;
            curr = curr.left;
        } else if (key > curr.val) {
            pred = curr;
            curr = curr.right;
        } else {
            if (curr.left !== null) {
                pred = rightMostInLeftSubTree(curr.left);
            }
            if (curr.right !== null) {
                succ = leftMostInRightSubTree(curr.right);
            }
            break;
        }
    }
    return [pred ? pred.val : null, succ ? succ.val : null];
}

let root = new Node(6);
root.left = new Node(4);
root.right = new Node(8);
root.left.right = new Node(1);
root.left.left = new Node(7);
root.right.right = new Node(9);

let [pred, succ] = getPredSuss(root, 1);
console.log("the pred:", pred, "the succ:", succ);
