function linearSearchFirstOccurance(arr, search) {
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        if (arr[i] == search) {
            return `${search} is present at index ${i} in the given array - first occurance`;
        }
    }

    return `${search} is not present in the given array`;
}

function linearSearchLastOccurance(arr, search) {
    let n = arr.length;
    let res = -1;
    
    for (let i = 0; i < n; i++) {
        if (arr[i] == search) {
            res = i;
        }
    }

    return res == -1 ? `${search} is not present in the given array` : `${search} is present at index ${res} in the given array - last occurance`;
}

let dsa = [1, 2, 3, 3, 4, 5, 6, 7, 8];
let search = 3;

console.log(linearSearchFirstOccurance(dsa, search));
console.log(linearSearchLastOccurance(dsa, search));
