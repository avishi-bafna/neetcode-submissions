class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s: string): number {
        let m = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            m.set(s[i], (m.get(s[i]) || 0) + 1);
        }

        let maxOdd = 0;
        let minEven = Infinity;

        for (const [key, value] of m) {
            if (value % 2 === 0) {
                minEven = Math.min(value, minEven);
            } else {
                maxOdd = Math.max(value, maxOdd);
            }
        }

        return maxOdd - minEven;
    }
}
