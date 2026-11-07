class Solution {
    /**
     * @param {string[]} words
     * @return {string}
     */
    destCity(paths: string[][]): string {
        const outgoing = new Set<string>();

        for (const [start, end] of paths) {
            outgoing.add(start);
        }

        for (const [start, end] of paths) {
            if (!outgoing.has(end)) {
                return end;
            }
        }

        return "";
    }
}
