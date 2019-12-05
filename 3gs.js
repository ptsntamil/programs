let checkGGGs = (str) => {
    for(let i=1; i<str.length-1;i++) {
        if(str[i-1] === "g" && str[i] === "g" && str[i+1] === "g") {
            return true;
            break;
        }
    }    
}
