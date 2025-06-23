
function swap(arr, i, j)
{
    [[arr[i]], [arr[j]]] = [[arr[j]], [arr[i]]]
}

function partition(arr, str, end)
{
    let indx = str - 1, pivot = arr[end]

    for (let j = str; j < end; j++)
    {
        if (arr[j] <= pivot)
        {
            indx++
            swap(arr, indx, j)
        }
    }
    indx++
    swap(arr, end, indx)
    return indx
}

function quickSort(arr, str, end)
{
    if (str < end)
    {
        let pivIdx = partition(arr, str, end)
        quickSort(arr, str, pivIdx - 1)
        quickSort(arr, pivIdx + 1, end)
    }
    return arr
}



let arr = [12, 31, 35, 8, 32, 17]

console.log(quickSort(arr, 0, arr.length - 1));
