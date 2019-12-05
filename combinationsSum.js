let findSum = arr => {
    if(arr.length === 0 ){
        return 0;
    }
    if(arr.length === 1) {
        return arr[0];
    }
    for(let i=0; i<arr.length; i++) {
        let remArrs = [...arr.splice(0,i),...arr.splice(i+1, arr.length)];
        console.log(arr[i] + findSum(remArrs));
        
    }
}