

function merge(arr, str, mid, end)
{

    let temp = []
    let i = str
    let j = mid + 1
    let invCount = 0

    while (i <= mid && j <= end)
    {
        if (arr[i] <= arr[j])
        {
            temp.push(arr[i])
            i++
        }
        else
        {
            temp.push(arr[j])

            j++
            invCount += (mid - i + 1)
        }
    }

    while (i <= mid)
    {
        temp.push(arr[i])
        i++
    }
    while (j <= end)
    {
        temp.push(arr[j])
        j++
    }

    for (let indx = 0; indx < temp.length; indx++)
    {
        arr[indx + str] = temp[indx]
    }
    return invCount
}


function mergeSort(arr, str, end)
{
    if (str < end)
    {
        let mid = str + (end - str) / 2
        let leftCount = mergeSort(arr, str, mid)
        let rightCount = mergeSort(arr, mid + 1, end)
        let invCount = merge(arr, str, mid, end)
        return leftCount + rightCount + invCount

    }
    return 0
}




let arr = [6, 3, 5, 2, 7]
let ans = mergeSort(arr, 0, arr.length - 1)
console.log(ans);
