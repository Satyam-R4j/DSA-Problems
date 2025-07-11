class Node
{
    constructor(value)
    {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyList
{
    constructor()
    {
        this.head = null
        this.tail = null
    }

    append(value)
    {
        const newNode = new Node(value)
        if (!this.head)
        {
            this.head = this.tail = newNode
        }
        else
        {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }

    insert(value)
    {
        const newNode = new Node(value)
        if (!this.head)
        {
            this.head = this.tail = null
        }
        else
        {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    popFront()
    {
        if (this.head === null) 
        {
            console.log("Dll is empty!");
            return
        }

        let temp = this.head
        this.head = this.head.next

        if (!this.head)
        {
            this.head.prev = null
        }
        temp.next = null
    }

    popBack()
    {
        if(this.head === null)
        {
            console.log("Dll is empty!");
            return
        }

        let temp = this.tail
        this.tail = this.tail.prev
        if(this.tail !== null)
        {

            this.tail.next = null        
        }
        temp.prev = null
    }

    print()
    {
        let curr = this.head
        let result = ' '
        while (curr !== null)
        {
            result += curr.value + (curr.next ? " <-> " : " <-> null")
            curr = curr.next
        }
        console.log(result);
    }
}

let dll = new DoublyList()
dll.append(1)
dll.append(2)
dll.append(3)
dll.insert(4)
dll.popBack()
dll.print()