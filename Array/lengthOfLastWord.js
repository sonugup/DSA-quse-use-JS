// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    if(s == ""){
        return 0;
    }
    var nArr = s.split(" ").filter((n) => n);
    var LastWord = nArr[nArr.length -1];
    return LastWord.length;
};


// Input: 
var str = "Hello World"
// Output: 5
lengthOfLastWord(str)
