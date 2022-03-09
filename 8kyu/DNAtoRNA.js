
/**
 * Traduit une chaîne ADN en ARN
 * 
 * @param {String} dna Séquence ADN
 * @returns {String} Séquence RNA
 */
function DNAtoRNA(dna) {
    let rna = dna.replace(/T/g,"U");
    return rna;
  }

  let dna = "UTTT";

  console.log(DNAtoRNA(dna));