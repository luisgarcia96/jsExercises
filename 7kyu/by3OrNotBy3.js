/* A trick I learned in elementary school to determine whether or not a number was divisible by three is to 
add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder
from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

Example:

"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
Try to avoid using the % (modulo) operator */


/**
 * Determine si un nombre est divisible par 3 sans utiliser l'opérateur modulo (%)
 * 
 * @param {String} str Un nombre sous forme de chaîne de caractères  
 * @returns {Boolean}
 */
function divisibleByThree(str){
    let somme = 0;
    for (const chiffre of str) {
        somme += parseInt(chiffre);
    }
    return somme % 3 === 0 ? true : false;
}

console.log(divisibleByThree('100853'));