class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights: number[]): number {
        let expectedHeights = [...heights], expectedCount = 0;
        expectedHeights.sort((a, b) => a - b);
        for(let i=0; i<heights.length; i++){
            if(heights[i] != expectedHeights[i]){
                expectedCount++;
            }
        }
        return expectedCount;
    }
}
