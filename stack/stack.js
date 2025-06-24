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

let s = new Stack();
s.push("1");
s.push("2");
s.push("3");
s.print();
console.log(s.peek());
s.pop();
s.print();
