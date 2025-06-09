function selectionSort(arr) {
    let n = arr.length;
   
    for (let i = 0; i < n;  i++) {
        for (let j = 0; j < n; j++) {
            if(arr[i] <= arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

let dsa = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(dsa));
