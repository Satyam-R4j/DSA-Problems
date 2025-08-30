function KthLevel(root, k) {
    let ans = [];
    function helper(node, k) {
        if (!node) return;
        if (k === 1) {
            ans.push(node.val);
            return;
        }
        helper(node.left, k - 1);
        helper(node.right, k - 1);
    }
    helper(root, k);
    return ans;
}
