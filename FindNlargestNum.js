let findNlargestNum = (array, n) => {
    console.time('a');
    let largestArr = [];
    for(let i=0; i<n; i++) {
        largestArr[i] = findLargestNum(array, n);
    }
    console.log(largestArr);
    console.timeEnd('a');
}

function findLargestNum(array, n) {
    let max = 0, maxIndex = 0;
    for(let i=0;i<array.length; i++) {
        if( max < array[i] && array[i]%2 === n%2) {
            max = array[i];
            maxIndex = i;
        }
    }
    array[maxIndex] = 0;
    return max;
}