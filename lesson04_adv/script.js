'use strict';
/** 
 * ПРодвинутый урок 4
 */

const myFunc = function(str) {
    console.log('str: ', str);
    console.log('typeof str: ', typeof str);
    
    
    if (typeof str === 'string') {
        console.log('This is a string');

        str = str.trim();
        console.log('trimed str: `' + str + '`');
        console.log('длина строки: `' + str + '` = ' + str.length);
        
        let newStr = '';
        if (str.length > 30) {
            newStr = str.substring(0, 30);
            newStr += '...';
        } else {
            newStr = str;
        }
        console.log('`' + newStr + '`');
        return newStr;
    } else {
        console.log('THis isnt a string');
    }
    return '.....';
};


console.log( myFunc('1234567890abcd'));
console.log( myFunc('         1234567890 123456789 123456789abcd'));
console.log('myFunc(234): ', myFunc(234));
console.log('myFunc([]): ', myFunc(['foo']));
