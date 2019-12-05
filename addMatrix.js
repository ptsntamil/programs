let arr = [
    [3,5,6,7],
    [4,5,6,8],
    [6,7,8,9],
    [4,3,2,7]
];
let addMatrixDiagnol= arr => {
    let addition = 0, addition1=0;
    arr.forEach((innerArray, index) => {
        addition += innerArray[index]-innerArray[innerArray.length -1 - index];
    });
    console.log(Math.abs(addition));
}