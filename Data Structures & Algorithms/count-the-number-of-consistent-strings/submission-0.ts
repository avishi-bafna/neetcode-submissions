class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed: string, words: string[]): number {
        let inconsistentCount=0;
        for(let i=0; i<words.length; i++){
            for(let j=0; j<words[i].length; j++){
                if(!allowed.includes(words[i][j])) {
                    inconsistentCount++;
                    break;
                }
            }
        }
        return words.length-inconsistentCount;
    }
}
