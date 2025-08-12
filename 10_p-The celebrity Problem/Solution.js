

function getCelebrity(arr)
{
    let n = arr.length
    let stack = []
    for (let i = 0; i < n; i++)
    {
        stack.push(i)
    }

    while(stack.length > 1)
    {
        let i = stack.pop()
        let j = stack.pop()

        if(arr[i][j] === 1)
        {
            stack.push(j)
        }
        else{
            stack.push(i)
        }
    }

    let celeb = stack.pop()
    for(let i = 0 ; i < n ; i++)
    {
        if((i !== celeb) && (arr[i][celeb] === 0 || arr[celeb][arr]  === 1))
        {
            return -1;
        }
    }
    return celeb
}

let arr = [[0, 1, 0], [0, 0, 0], [0, 1, 0]]
let ans = getCelebrity(arr)
console.log(ans)