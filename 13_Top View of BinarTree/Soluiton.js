function topView() {
    let qu = [];
    let map = new Map();

    qu.push([root, 0]);

    while (qu.length > 0) {
        let [curr, hVal] = qu.shift();

        if (!map.has(hVal)) {
            map.set(hVal, curr.val);
        }
        if (curr.left !== null) {
            qu.push([curr.left, hVal - 1]);
        }
        if (curr.right !== null) {
            qu.push([curr.right, hVal + 1]);
        }
    }

    let sortedKeys = [...map.keys()].sort((a, b) => a - b);
    sortedKeys.forEach((hVal)=>{
        console.log(map.get(hVal))
    })
}
