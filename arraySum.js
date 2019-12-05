let arrSum = [3,6,7,9,0,5,4];
let totalNum = 7;
var findSumValue = _=> {
    console.time("find_sum");
    arrSum.sort();
    for(let i = arrSum.length-1; i >= 0; i--) {
        let sum = arrSum[i];
       for(let j=i-1;j>=0;j--) {
           if(sum + arrSum[j] < sum) {
               sum = sum+arrSum[j];
           } else if(sum + arrSum[j] == totalNum) {
               console.log(true);
               break;
           }
       } 
    }
    console.timeEnd("find_sum");
}