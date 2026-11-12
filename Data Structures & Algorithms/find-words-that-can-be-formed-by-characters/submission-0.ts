class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words: string[], chars: string): number {
        let m = new Map();

        for (let char of chars) {
            m.set(char, (m.get(char) || 0) + 1);
        }

        let result = 0;

        for (let word of words) {
            let temp = new Map();

            for (let char of word) {
                temp.set(char, (temp.get(char) || 0) + 1);
            }

            let valid = true;

            for (let [char, count] of temp) {
                if (count > (m.get(char) || 0)) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                result += word.length;
            }
        }

        return result;
    }
}
