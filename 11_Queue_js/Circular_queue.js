class CircularQueue
{
    constructor(size)
    {
        this.arr = new Array(size)
        this.capacity = size
        this.front = 0
        this.rear = 0
        this.count = 0
    }

    push(data)
    {
        if (this.count === this.capacity)
        {
            console.log("Queue is full!!f")
            return
        }
        this.arr[this.rear] = data
        this.rear = (this.rear + 1) % this.capacity
        this.count++
    }

    pop()
    {
        if(this.isEmpty())
        {
            console.log("Queue is empty!")
            return
        }
        this.front = (this.front + 1) % this.capacity
        this.count--
    }

    getFront()
    {
        if(this.isEmpty())
        {
            console.log("Queue is empty")
            return null
        }
        return this.arr[this.front]
    }

    isEmpty()
    {
        return this.count === 0
    }
}