class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let arr1 = [];
        let i = 0, j = 0;

        while (i < word1.length && j < word2.length) {
            arr1.push(word1[i++]);
            arr1.push(word2[j++]);
        }

        while (i < word1.length) {
            arr1.push(word1[i++]);
        }

        while (j < word2.length) {
            arr1.push(word2[j++]);
        }

        return arr1.join("");
    }
}
