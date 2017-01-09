'use strict'

module.exports = {

reverseString: function(str){
    if (!str) { return null; }
    var revStr = '';
    var i = str.length - 1;
    while(i >= 0) { revStr += str[i]; i--;  } 
    if (str === revStr) {
        return true;
    } else {
        return revStr;
    }
}
}