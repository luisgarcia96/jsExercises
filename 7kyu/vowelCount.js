/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */


/**
 * Retourne le nombre d'occurrences des voyelles dans la chaîne
 * 
 * @param {String} str Une chaîne de caractères quelleconque 
 * @returns {Number}
 */
function getCount(str) {
    let matchedVowels = str.match(/[aeiou]/gi);
    return matchedVowels === null ? 0 : matchedVowels.length;
  }

  console.log(getCount("Luis Armando Garcia"));