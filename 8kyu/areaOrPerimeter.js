/*You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9

Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.*/

let length = 4;
let width = 6;

/*function areaOrPerimeter(l , w) {
    if (l === w) {
        return l*w;
    } else {
        return l*2+w*2
    }
}*/

/**
 * Calcule l'aire ou le périmètre d'une figure suivant si c'est un carré ou un rectangle
 * 
 * @param {Number} l La longueur de la figure
 * @param {Number} w La largeur de la figure
 * @returns {Number} L'aire si c'est un carré et le périmètre si c'est un rectangle
 */
function areaOrPerimeter(l , w) {
    return (l === w) ? l*w : 2*l + 2*w;
}

console.log(areaOrPerimeter(length, width));