function linearSearchTotalOccurance(arr, search) {
    let n = arr.length;
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        if (arr[i] == search) {
            count = count + 1;
        }
    }

    return `${search} is present ${count} times in the given array`;
}

let dsa = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8];
let search = 3;

console.log(linearSearchTotalOccurance(dsa, search));
