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

    delete(val)
    {
        if (!this.head)
        {
            console.log("List is empty!!");
            return
        }

        if (this.head.value === val)
        {
            this.head = this.head.next
            return
        }

        let prev = null
        let current = this.head
        while (current && current.value !== val)
        {
            prev = current
            current = current.next
        }

        if (!current)
        {
            console.log("Value is not found in list");
            return
        }

        prev.next = current.next
    }

    reverse()
    {
        if (!this.head)
        {
            console.log("List is empty!!");
            return
        }
        let prev = null
        let curr = this.head
        let next = null
        while (curr !== null)
        {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.print()
list.reverse()
list.print()




