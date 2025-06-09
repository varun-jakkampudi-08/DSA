function bubbleSort(arr) {
    let flag = false;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        flag = false;

        for (let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j]
                arr[j] = temp;
                flag = true;
            }
        }
    }

    return arr;
}

let dsa = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(dsa));
