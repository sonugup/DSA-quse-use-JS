

var lengthOfLastWord = function(s) {
    if(s == ""){
        return 0;
    }
    var nArr = s.split(" ").filter((n) => n);
    var LastWord = nArr[nArr.length -1];
    return LastWord.length;
};
