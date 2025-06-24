class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);    
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length == 0;
    }

    print() {
        console.log(this.items.join("->"));
    }

    peek() {
        return this.items[0];
    }

    clear() {
        this.items = [];
    }
}

let q = new Queue();
q.enqueue("1");
q.enqueue("2");
q.enqueue("3");
q.print()
console.log(q.peek());
q.dequeue();
q.print();
