function linearSearch(arr, search) {
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        if (arr[i] == search) {
            return `${search} is present at index ${i} in the given array"`;
        }
    }

    return search + " is not present in the given array";
}

let dsa = ["Array", "Stack", "Queue", "Linked List", "Tree", "Graph", "Hash Table", "Heap"];
let search = "Stack";

console.log(linearSearch(dsa, search));
