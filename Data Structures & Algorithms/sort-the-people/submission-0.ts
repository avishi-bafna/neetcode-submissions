class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names: string[], heights: number[]): string[] {
        return names
            .map((name, i) => [name, heights[i]] as [string, number])
            .sort((a, b) => b[1] - a[1])
            .map(person => person[0]);
    }
}
