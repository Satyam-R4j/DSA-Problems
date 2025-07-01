class Node
{
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}


class LinkedList
{
    constructor()
    {
        this.head = null
        this.len = 0
    }

    append(value)
    {
        const newNode = new Node(value)
        if (!this.head)
        {
            this.head = newNode
        }
        else
        {
            let current = this.head
            while (current.next)
            {
                current = current.next
            }
            current.next = newNode
        }
        this.len++
    }

    print()
    {
        let current = this.head
        let result = ''
        while (current)
        {
            result += current.value + (current.next ? " -> " : ' -> null')
            current = current.next
        }
        console.log(result);
    }

    delete(head)
    {
        let current = 
    }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.print()




