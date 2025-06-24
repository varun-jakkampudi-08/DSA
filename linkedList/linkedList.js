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
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
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
        
        const newNode = new Node(data);
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
            count++;
        }
        
        newNode.next = current;
        previous.next = newNode;
    }

    printList() {
        let current = this.head;
        let output = 'HEAD -> ';
        while (current) {
            output += `${current.data} -> `;
            current = current.next;
        }
        output += 'null';
        console.log(output);
    }
}

const list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(40);
list.addLast(50);
console.log("Original List:");
list.printList();

console.log("\nInserting 30 at index 2:");
list.insertAt(30, 2); 
list.printList();

console.log("\nInserting 5 at index 0:");
list.insertAt(5, 0);
list.printList(); 

console.log("\nInserting 60 at index 6 (end of list):");
list.insertAt(60, 6);
list.printList();

console.log("\nTrying to insert at out-of-bounds index 10:");
list.insertAt(99, 10);
list.printList();
