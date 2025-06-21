

function merge(arr, str, mid, end)
{
    let temp = []
    let i = str
    let j = mid + 1

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
}


function mergeSort(arr, str, end)
{
    if (str < end)
    {
        let mid = Math.floor(str + (end - str) / 2)
        //Left
        mergeSort(arr, str, mid)

        //Right
        mergeSort(arr, mid + 1, end)

        merge(arr, str, mid, end)
    }
}

let arr = [12, 31, 52, 24, 5, 1]
let str = 0
let end = arr.length -1 
console.log(end);

mergeSort(arr, str, end)

console.log(arr);
