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

let stc = new Stack()
stc.push(2)
stc.push(2)
stc.push(2)

stc.print()



size = stc.size()
console.log(size);
