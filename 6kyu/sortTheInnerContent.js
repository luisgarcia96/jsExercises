//You have to sort the inner content of every word of a string in descending order.

//The inner content is the content of a word without first and the last char.

//Some examples:
// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"

/**
 * 
 * @param {String} words 
 * @returns String
 */
function sortTheInnerContent(words){

    const wordsArray = words.split(' ');
    words = []; //On réinitialise la varibale words

    for (let word of wordsArray) {   
        if (word.length > 3) {

            let innerContent = [...word.slice(1, -1)];
            innerContent = innerContent.sort().reverse();

            let newWord = [word[0], ...innerContent, word[word.length-1]];
            words.push(newWord.join(''));
        } else {
            words.push(word);
        }
    }
    return words.join(' ');
}

console.log(sortTheInnerContent("sort the inner content in descending order"));