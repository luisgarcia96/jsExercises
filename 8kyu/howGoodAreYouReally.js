/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array*/


/**
 * Calcule la moyenne de la classe et la compare avec ma note individuelle
 * 
 * @param {[Number]} classPoints Les notes des différentes personnes de la classe
 * @param {Number} yourPoints Ma note individuelle
 * @returns {Boolean} True si ma note est supérieure à la moyenne de la classe, False si c'est le contraire
 */
function betterThanAverage(classPoints, yourPoints) {
    let sommeNotesClasse = 0;
    for (const note of classPoints) {
        sommeNotesClasse += note;
    }
    return yourPoints > (sommeNotesClasse/classPoints.length) ? true : false;
  }

  console.log(betterThanAverage([3,9,4,2],2));