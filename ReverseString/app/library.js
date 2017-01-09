'use strict'

module.exports = {

reverseString: function(str){
    if (!str) { return null; }
    var revStr = '';
    for (var i = str.length - 1; i >= 0; i--){
        revStr += str[i];
    }
        
    if (str === revStr) {
        return true;
    } else {
        return revStr;
    }
}
}