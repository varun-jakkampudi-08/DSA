class Stack {
    constructor() {
        this.items = [];
    }

    add(value) {
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
s.add("1");
s.add("2");
s.add("3");
s.print();
console.log(s.peek());
s.pop("3");
s.print();
