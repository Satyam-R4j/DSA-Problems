class Stack
{

    constructor()
    {
        this.stack = []
    }

    push(val)
    {
        this.stack.push(val)
    }

    pop()
    {
        if (this.isEmpty())
        {
            console.log("Stack is empty!!")
            return
        }
        else
        {

            return this.stack.pop()
        }
    }

    top()
    {

        if (this.isEmpty())
        {
            console.log("Stack is empty!!")
            return
        }
        else
        {
            return this.stack[this.stack.length - 1]
        }
    }

    isEmpty()
    {
        return this.stack.length === 0
    }

    size()
    {
        return this.stack.length
    }

    print()
    {
        console.log(this.stack.join(' '));

    }
}

let arr = [6, 8, 0, 1, 3]
let stack = new Stack()
let ans = new Array(arr.length)
for (let i = arr.length - 1; i >= 0; i--)
{
    while (!stack.isEmpty() &&arr[i] >= stack.top())
    {
        stack.pop()
    }
    if (stack.isEmpty())
    {
        ans[i] = -1
    }
    else
    {
        ans[i] = stack.top()
    }

    stack.push(arr[i])
}

console.log(ans);
