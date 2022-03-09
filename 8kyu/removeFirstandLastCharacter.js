/* It's pretty straightforward. Your goal is to create a function that 
removes the first and last characters of a string. You're given one 
parameter, the original string. You don't have to worry with strings 
with less than two characters. */


/**
 * Enlève le premier et le dernier caractère d'un String passé
 * 
 * @param {String} str Une chaîne de cractères quelleconque 
 * @returns {String} La chaîne de caractères passée au préalable sans le premier et le dernier caractère
 */
function removeChar(str){
    return str.slice(1,-1);
   };

console.log(removeChar('HHOLAA'));