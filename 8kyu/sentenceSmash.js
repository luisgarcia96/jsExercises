/* Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great' */



/**
 * Elle prends un Array de mots et le transforme en une phrase
 * 
 * @param {[String]} words Une liste de mots 
 * @returns {String} Une chaîne de caractère contenant les mots concatenés
 */
function smash(words) {
    return words.join(' ');
 };

 console.log(smash(['hello', 'world', 'this', 'is', 'great']));