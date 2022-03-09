// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


/**
 * Retourne la somme des carrés des nombres passés comme paramètre
 * 
 * @param {[Number]} numbers Un array aléatoire de nombres 
 * @returns {Number}
 */
function squareSum(numbers){
    let somme = 0;
    for (const number of numbers) {
        somme += number**2;
    }
    return somme;
}

console.log(squareSum([1, 2, 2]));