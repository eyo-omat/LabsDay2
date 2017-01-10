'use strict'

module.exports = {

words: function(str){
       /* var wordCount = str.split(" ").length;
        var wordsArray = str.split(" ");
        var obj = new Object();
        for (var i = 0; i < a.length; i++) {
            obj[a[i]] = a[i];
        }
        var countArray = [];
        var count = 0;
        console.log(wordCount);
        console.log(wordsArray);
        for (var i = 0; i < wordCount; i++) {
            var pos = 0;
            if (wordsArray[pos] === wordsArray[i]) { countArray[0] = 1+count; }
                pos++; 
                console.log(pos);
        }*/
var word = str.replace(/\s\s*/g, ' ');
var word = word.replace(/[\r\n]\s*/g, ' ');
var wordsplit = word.split(" ");
var obj = { };
for (var i = 0, j = wordsplit.length; i < j; i++) {
  if (obj[wordsplit[i]]) {
     obj[wordsplit[i]]++;
  }
  else {
     obj[wordsplit[i]] = 1;
  }
}

return obj;
/*var fruits = str;
var a = fruits.split(" ");
var obj = new Object();
for (var i = 0; i < a.length; i++) {
    obj[a[i]] = a[i];
}
for (var key in obj) {
   console.log(key);
   fruits = str.split(key);
}
   console.log(fruits); */   
}
}