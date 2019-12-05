let str = "XYZAAAAACCCCCAAAAACCCCCAAAAAGGGGGTTTTTGGGGGTTTTTXYZABCDEFGH";
console.time("a")
let repeatedChar = "", newChar = 0;
for(let i=0; i<str.length; i++) {
    for(let j = i; j < str.length; j++) {
        let currentChar = str[j];
        if(repeatedChar.indexOf(currentChar)  === -1) {
            newChar++;
        }
        if(newChar < 3) {
            repeatedChar += currentChar;  
            //console.log(`newChar ${repeatedChar}`);  
        } else {
            newChar = 0;
            repeatedChar = "";
            break;
        }
        if(repeatedChar.length === 10) {
            console.log(repeatedChar);
            repeatedChar = "";
            break;
        }
    }
}
console.timeEnd("a");