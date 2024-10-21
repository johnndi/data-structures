function mergeAlternately(word1, word2) {
    let merged = [];
    let i = 0, j = 0;

    // Loop through both strings, alternating characters
    while (i < word1.length && j < word2.length) {
        merged.push(word1[i]);
        merged.push(word2[j]);
        i++;
        j++;
    }

    // Append any remaining characters
    if (i < word1.length) {
        merged.push(word1.slice(i));
    }
    if (j < word2.length) {
        merged.push(word2.slice(j));
    }

    return merged.join('');
}


const word1 = "abc";
const word2 = "defg";
console.log(mergeAlternately(word1, word2));  
