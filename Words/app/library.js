'use strict'

module.exports = {

words: function(str){
        var wordCount = str.split(" ").length;
        var wordsArray = str.split(" ");
        var countArray = [];
        var count = 0;
        console.log(wordCount);
        console.log(wordsArray);
        for (var i = 0; i < wordCount; i++) {
            var pos = 0;
            if (wordsArray[pos] === wordsArray[i]) { countArray[0] = 1+count; }
                pos++; console.log(pos);
        }
        console.log(countArray);
}
}