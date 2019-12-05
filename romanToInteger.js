let romanToNum = roman => {
    switch(roman) {
        case "I":
            return 1;
            break;
        case "V":
            return 5;
            break;
        case "X":
            return 10;
            break;
        case "L":
            return 50;
            break;
        case "C":
            return 100;
            break;
        case "D":
            return 500;
            break;
        case "M":
            return 1000;
            break; 
    }
}

let romanLettersToNumber = (roman) => {
    let total = 0;
    for(let i=0; i<roman.length;i++) {
        let curr = romanToNum(roman[i]);
        let nxt = romanToNum(roman[i+1]);
        if(curr<nxt) {
            total += nxt - curr;
            i++;
        } else {
            total += curr;
        }
    }
    return total;
}