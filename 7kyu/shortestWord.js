// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


/**
 * Retourne la longueur du mot le plus court de la chaîne passée en paramètre
 * 
 * @param {String} s Une chaîne de caractères quelleconque 
 * @returns {Number} La longueur du mot le plus court
 */
function findShort(s){
    const arrayOfWords =  s.split(' ');
    let shortestWord = arrayOfWords[0];
    for (let i = 1; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length <= shortestWord.length) {
            shortestWord = arrayOfWords[i];
        }
    }
    return shortestWord.length
}


console.log((findShort("bitcoin take over the world maybe who knows perhaps")));