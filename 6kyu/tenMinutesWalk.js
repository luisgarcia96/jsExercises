/* You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the 
opportunity to go for a short walk. The city provides its citizens with a Walk 
Generating App on their phones -- everytime you press the button it sends you an 
array of one-letter strings representing directions to walk 
(eg. ['n', 's', 'w', 'e']). 
 
You always walk only a single block for each letter (direction) and you know it 
takes you one minute to traverse one city block, so create a function that will 
return true if the walk the app gives you will take you exactly ten minutes (you 
don't want to be early or late!) and will, of course, return you to your starting 
point. Return false otherwise.

Note: you will always receive a valid array (string in COBOL) containing a random 
assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give 
you an empty array (that's not a walk, that's standing still!). */

function isValidWalk(walk) {
    
    if (walk.length === 10) {
        const Direction = {n: 1, s: -1, e: 1, w: -1};
 
        let x = 0; //Compteur axe horizontale
        let y = 0; //Compteur axe verticale

        for (const el of walk) {
            if (el === 'n' || el === 's') {
                x += Direction[el];
            } else {
                y += Direction[el];
            }
        }
        if (x === 0 && y === 0) {return true}
    }
    return false;
  }

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));