/**
 * @param {number[]} arr
 * @param {number[]} ans
 * @param {number} i
 */

const printSubSets = (arr, ans, i) =>
{
    if (i === arr.length)
    {
        console.log(ans);

        return
    }

    //include
    console.log("push:",
        ans.push(arr[i]));
    printSubSets(arr, ans, i + 1)

    console.log("pop:",
        ans.pop())
    //exclude
    printSubSets(arr, ans, i + 1)
}


let arr = [1, 2, 3]
let ans = new Array()

printSubSets(arr, ans, 0)
