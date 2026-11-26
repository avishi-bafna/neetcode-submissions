class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    makeEqual(words: string[]): boolean {
        let totalLength = 0, totalWords = words.length;
        let freq = new Array(26).fill(0);

        for(let i = 0; i < words.length; i++){
            totalLength += words[i].length;

            for(let j = 0; j < words[i].length; j++){
                freq[words[i].charCodeAt(j) - 97]++;
            }
        }

        for(let i = 0; i < freq.length; i++){
            if(freq[i] % totalWords != 0){
                return false;
            }
        }

        return true;
    }
}
