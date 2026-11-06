class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    addSpaces(s: string, spaces: number[]): string {
        let result = [];
        let j = 0;

        for (let i = 0; i < s.length; i++) {
            if (j < spaces.length && i === spaces[j]) {
                result.push(" ");
                j++;
            }

            result.push(s[i]);
        }

        return result.join("");
    }
}
