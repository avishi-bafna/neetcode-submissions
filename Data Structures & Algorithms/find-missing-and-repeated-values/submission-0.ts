class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid: number[][]): number[] {
        let arr: number[] = [];

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                arr.push(grid[i][j]);
            }
        }

        arr.sort((a, b) => a - b);

        let missing = 0;
        let repeated = 0;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                repeated = arr[i];
            }

            if (arr[i] - arr[i - 1] > 1) {
                missing = arr[i - 1] + 1;
            }
        }

        if (arr[0] !== 1) {
            missing = 1;
        }

        if (arr[arr.length - 1] !== arr.length) {
            missing = arr.length;
        }

        return [repeated, missing];
    }
}
