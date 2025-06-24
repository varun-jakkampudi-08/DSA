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
            this.head = newNode;
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

        let newnode = new Node(data);
        let current = this.head;
        let previous = null;
        let count = 0;
        
        while(count < index) {
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
