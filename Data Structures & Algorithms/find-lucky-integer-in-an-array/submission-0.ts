class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr: number[]): number {
        let m = new Map<number, number>();

        for (let i = 0; i < arr.length; i++) {
            m.set(arr[i], (m.get(arr[i]) || 0) + 1);
        }

        let result = -1;

        for (const [key, value] of m) {
            if (key === value && key > result) {
                result = key;
            }
        }

        return result;
    }
}
