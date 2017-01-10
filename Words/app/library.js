'use strict'

module.exports = {

words: function(str){

var word = str.replace(/\s\s*/g, ' ');
var word = word.replace(/[\r\n]\s*/g, ' ');
var wordsArray = word.split(" ");
var wordCount = wordsArray.length;
var wordFrequecies = { };
for (var i = 0, j = wordCount; i < j; i++) {
  if (wordFrequecies[wordsArray[i]]) {
     wordFrequecies[wordsArray[i]]++;
  }
  else {
     wordFrequecies[wordsArray[i]] = 1;
  }
}

return wordFrequecies;  
}
}