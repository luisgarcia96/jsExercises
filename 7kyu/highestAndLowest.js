/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

/**
 * Retourne une chaîne de caractères avec le nombre le plus grand et le plus petit séparés par un espace
 * 
 * @param {String} numbers Une chaîne de caractères contenant des nombres
 * @returns {String}
 */
function highAndLow(numbers){
    const numArray = numbers.split(' ');
    const max = Math.max.apply(null,numArray);
    const min = Math.min.apply(null,numArray);
    return `${max} ${min}`;
  }

  console.log(highAndLow('1 2 -3 4 5'));