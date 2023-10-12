var isPalindrome = function(s) {
    // let str=s.split(" ").join("");
   
    let i =0;
    let j=s.length-1;

     s=s.toLowerCase();

    while(i<=j){
        let low=s[i];
        let hei=s[j]
        if(!((low>="a" && low<="z") || (low>="0" && low<="9") )){
            i++;
        }
        else if(!((hei>="a" && hei<="z")  || (hei>="0" && hei<="9"))){
            j--;
        }else{
             if(low !== hei) return false;
            i++;
            j--;
        }
        
    }
    return true;
};
