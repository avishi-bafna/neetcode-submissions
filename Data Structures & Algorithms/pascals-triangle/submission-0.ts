class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows: number): number[][] {
        let finalArr: number[][] = [];

        if (numRows >= 1) {
            finalArr.push([1]);
        }

        for (let i = 1; i < numRows; i++) {
            let prevRow = finalArr[i - 1];
            let currentRow = [1];

            for (let j = 1; j < i; j++) {
                currentRow.push(prevRow[j - 1] + prevRow[j]);
            }

            currentRow.push(1);
            finalArr.push(currentRow);
        }

        return finalArr;
    }
}
