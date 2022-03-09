/**
 * Create a function that takes an integer as an argument and 
 * returns "Even" for even numbers or "Odd" for odd numbers.
 * 
 * @param {Number} n Nombre entier positif ou négatif
 * @returns {String} "Even" ou "Odd"
 */
function evenOrOdd(n) {
  return (n % 2 === 0) ? "Even": "Odd";
}

console.log(evenOrOdd(24));