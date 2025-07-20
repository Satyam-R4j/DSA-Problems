let arr = [5, 3, 6, 8, 2, 1, 4, 7]

function swap(arr, i, j)
{
    [arr[i], arr[j]] = [arr[j], arr[i]]
}


let i = 0
while (i < arr.length)
{
    let correctIndx = arr[i] - 1
    if (arr[i] !== arr[correctIndx])
    {
        swap(arr, i, correctIndx)
    }
    else
    {
        i++
    }
}
console.log(arr);
