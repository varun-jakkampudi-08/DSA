class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        let newnode = new Node(data);

        if(!this.head) {
            this.head = newnode;
            return;
        }

        newnode.next = this.head;
        this.head = newnode;
    }

    addLast(data) {
        let newnode = new Node(data);
        
        if (!this.head) {
            this.head = newnode;
            return;
        }
        
        let current = this.head;
        
        while(current.next) {
            current = current.next;
        }

        current.next = newnode;
    }

    insertAt(data, index) {
        if (index < 0) {
            console.error("Error: Index cannot be negative.");
            return;
        }

        if (index === 0) {
            this.addFirst(data);
            return;
        }

        const newnode = new Node(data);
        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            if (current === null) {
                console.error(`Error: Index ${index} is out of bounds.`);
                return;
            }
            previous = current;
            current = current.next;
            count = count + 1;
        }

        newnode.next = current;
        previous.next = newnode;
    }

    print() {
        let current = this.head;
        let res = 'HEAD -> ';
        
        while(current) {
            res = res +  current.data + '->';
            current = current.next;      
        }

        res = res + 'null';
        console.log(res);
    }
}

const list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(40);
list.addLast(50);
console.log("Original List:");
list.print();

// console.log("\nInserting 30 at index 2:");
// list.insertAt(30, 2);
// list.print();

// console.log("\nInserting 60 at the end (index 5):");
// list.insertAt(60, 5);
// list.print();

// console.log("\nInserting 5 at the beginning (index 0):");
// list.insertAt(5, 0);
// list.print();