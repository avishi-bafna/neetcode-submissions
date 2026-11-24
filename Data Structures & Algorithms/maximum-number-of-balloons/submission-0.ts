class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text: string): number {
        const count: Record<string, number> = {
            b: 0,
            a: 0,
            l: 0,
            o: 0,
            n: 0
        };

        for (const char of text) {
            if (char in count) {
                count[char]++;
            }
        }

        return Math.min(
            count.b,
            count.a,
            Math.floor(count.l / 2),
            Math.floor(count.o / 2),
            count.n
        );
    }
}
