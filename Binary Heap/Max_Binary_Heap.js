class MaxBinaryHeap {
    constructor() {
        this.value = [41, 39, 33, 18, 27, 12];
    }

    insert(element) {
        this.value.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.value.length - 1;
        const element = this.value[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.value[parentIdx];
            if (element <= parent) break;
            this.value[parentIdx] = element;
            this.value[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax(){
        const max = this.value[0]
        const end = this.value.pop()
        this.value[0] = end
        this.sindDown()
        return max
    }

    sindDown()
    {
        let idx = 0
        const length = this.value.length
        const element = this.value[0]
        while(true)
        {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2 
        }

    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1)
console.log(heap.value);
