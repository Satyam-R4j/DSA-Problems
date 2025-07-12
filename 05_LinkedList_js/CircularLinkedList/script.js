class Node
{
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}

class CircularList
{
    constructor()
    {
        this.head = this.tail = null
    }

    append(value)
    {
        let newNode = new Node(value)
        if (!this.head)
        {
            this.head = this.tail = newNode
            this.tail.next = this.head
        }
        else
        {
            newNode.next = this.head
            this.head = newNode
            this.tail.next = this.head
        }
    }

    insert(value)
    {
        let newNode = new Node(value)
        if (!this.head)
        {
            this.head = this.tail = newNode
            this.tail.next = this.head
        }
        else
        {
            this.tail.next = newNode
            newNode.next = this.head
            this.tail = newNode
        }
    }

    popFront()
    {
        if (!this.head)
        {
            console.log("List is empty!");
            return
        }
        if(this.head === this.tail)
        {
            this.head = this.tail = null
            return
        }
        let temp = this.head
        this.head = this.head.next
        this.tail.next = this.head
        temp.next = null
    }

    popBack()
    {
        if(!this.head) {
            console.log("List is empty");
            return
        }

        if(this.tail === this.head)
        {
            this.head = this.tail= null
            return
        }
        let curr = this.head
        while(curr.next !== this.tail)
        {
            curr = curr.next
        }
        this.tail.next = null
        this.tail = curr
        this.tail.next = this.head
    }

    print()
    {
        if (!this.head) return
        let result = ''
        let curr = this.head
        result += curr.value
        curr = curr.next

        while (curr !== this.head)
        {
            result += ' -> ' + curr.value
            curr = curr.next
        }
        result += "-> head"
        console.log(result);
    }

}

let cll = new CircularList()

cll.insert(1)
cll.insert(2)
cll.insert(3)

cll.popBack()
cll.popBack()

cll.print()

