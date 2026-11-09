class Solution {
    /**
     * @param {number[]} original
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    construct2DArray(original: number[], m: number, n: number): number[][] {
        if(original.length !== m * n){
            return [];
        }
        let result = [];

        for (let i = 0; i < m; i++) {
            let temp = [];

            for (let j = 0; j < n; j++) {
                temp.push(original[i * n + j]);
            }

            result.push(temp);
        }
        return result;
    }
}
