class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}

class CircularList{
    constructor(){
        this.head = this.tail = null
    }

    append(value)
    {
        let newNode = new Node(value)
        if(!this.head)
        {
            this.head = this.tail = newNode
            this.tail.next = this.head
        }
        else{
            newNode.next = this.head
            this.head = newNode
            this.tail.next = this.head
        }
    }

    print()
    {
        if(!this.head) return
        let result = ' '
        result += this.head.value + " -> "

        let curr = this.head.next
        while(curr !== this.head   )
        {
            result += curr.value + ((curr.next !== this.head) ? " -> " : " -> head")
            curr = curr.next
        }
        console.log(result);
        
    }

}

let cll = new CircularList()
cll.append(1)
cll.append(2)
cll.append(3)
cll.print()

