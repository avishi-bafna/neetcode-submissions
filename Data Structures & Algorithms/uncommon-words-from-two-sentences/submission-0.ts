class Solution {
    /**
     * @param {string} s1
     * @return {string}
     */
    uncommonFromSentences(s1: string, s2: string): string[] {
        const map = new Map<string, number>();

        const words = [...s1.split(" "), ...s2.split(" ")];

        for (const word of words) {
            map.set(word, (map.get(word) || 0) + 1);
        }

        const result: string[] = [];

        for (const [word, count] of map) {
            if (count === 1) {
                result.push(word);
            }
        }

        return result;
    }
}
