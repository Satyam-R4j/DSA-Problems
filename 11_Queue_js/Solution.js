class Node
{
    constructor(val)
    {
        this.val = val
        this.next = null
    }
}

class Queue
{
    constructor()
    {
        this.head = this.tail = null

    }

    push(val)
    {
        const node = new Node(val)
        if (this.isEmpty())
        {
            this.head = node
            this.tail = node
        }
        else
        {
            this.tail.next = node
            this.tail = node
        }
    }

    pop()
    {
        if (this.isEmpty())
        {
            console.log("List is empty !!")
            return null
        }
        const val = this.head.val
        this.head = this.head.next
        if (this.head === null)
        {
            this.tail = null
        }
        return val
    }

    front()
    {
        if (this.isEmpty())
        {
            console.log("LL is empty !!")
            return null
        }
        return this.head.val
    }

    isEmpty()
    {
        return this.head === null
    }
}


let head = new Node(1)

let node = new Node(2)

head.next = node
let Queue = head
console.log(head.next.val)

