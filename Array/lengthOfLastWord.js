// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// mathor-1
var lengthOfLastWord = function(s) {
    if(s == ""){
        return 0;
    }
    var nArr = s.split(" ").filter((n) => n);
    var LastWord = nArr[nArr.length -1];
    return LastWord.length;
};

// mathor-2
var lengthOfLastWord = function(str) {
   let count = 0;
    let flag = false;
 
    // Loop through the string backwards
    for (let i = str.length - 1; i >= 0; i--) {
        // Once the first character from last
        // is encountered, set char_flag to true.
        if ((str[i] >= 'a' && str[i] <= 'z')
            || (str[i] >= 'A' && str[i] <= 'Z')) {
            flag = true;
            count++;
        }
        // When the first space after the
        // characters (from the last) is
        // encountered, return the length
        // of the last word
        else {
            if (flag == true)
                return count;
        }
    }
 
    return count;
};

// Input: 
var str = "Hello World"
// Output: 5
lengthOfLastWord(str)

cosnorl.log(lengthOfLastWord(str))
