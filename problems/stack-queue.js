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

class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);    
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length == 0;
    }

    print() {
        console.log(this.items);
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    clear() {
        this.items = [];
    }
}

class StackWithQueues {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push(data) {
        this.q2.enqueue(data);

        while(!this.q1.isEmpty()) {
            this.q2.enqueue(this.q1.dequeue());
        }

        [this.q1, this.q2] = [this.q2, this.q1];
    }

    pop() {
        this.q1.dequeue();
    }

    print() {
        console.log(this.q1);
    }

    isEmpty() {
        return this.q1.isEmpty();
    }

    size() {
        return this.q1.size();
    }
}

class QueueWithStacks {
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
    }

    enqueue(value) {
        this.inStack.push(value);
    }

    _transferStacks() {
        if (this.outStack.isEmpty()) {
            while (!this.inStack.isEmpty()) {
                this.outStack.push(this.inStack.pop());
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        
        this._transferStacks();
        return this.outStack.pop();
    }

    print() {
        console.log(this.inStack);
    }

    isEmpty() {
        return this.inStack.isEmpty() && this.outStack.isEmpty();
    }

    size() {
        return this.inStack.size() + this.outStack.size();
    }
}

let sq = new StackWithQueues();
sq.push("1");
sq.push("2");
sq.push("3");
sq.print();

let qs = new QueueWithStacks();
qs.enqueue("1");
qs.enqueue("2");
qs.enqueue("3");
qs.print();
