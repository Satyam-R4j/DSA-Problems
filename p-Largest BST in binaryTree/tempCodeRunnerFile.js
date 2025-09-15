// Node structure
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Info {
    constructor(min, max, size) {
        this.min = min;
        this.max = max;
        this.size = size;
    }
}

function helper(root) {
    if (root === null)
        return new Info(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0);

    let left = helper(root.left);
    let right = helper(root.right);

    if (root.value > left.max && root.value < right.min) {
        let currMin = Math.min(root.value, left.min);
        let currMax = Math.max(root.value, right.max);
        let currSize = left.size + right.size + 1;
        return new Info(currMin, currMax, currSize);
    }
    return new Info(
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
        Math.max(left.size, right.size)
    );
}

function largestBSTinBT(node) {
    let info = helper(node);
    return info.size;
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(1);
root.left.right = new Node(8);
root.right.right = new Node(7);

let ans = largestBSTinBT(root);
console.log("the ans is: ", ans);
