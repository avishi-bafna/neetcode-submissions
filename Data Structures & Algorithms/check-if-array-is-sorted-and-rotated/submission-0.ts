class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums: number[]): boolean {
        let sortedArr = [...nums].sort((a, b) => a - b);
        let arr = [...nums];

        for (let i = 0; i < nums.length; i++) {
            let num = arr.pop()!;
            arr.unshift(num);

            if (arr.every((num, i) => num === sortedArr[i])) {
                return true;
            }
        }

        return false;
    }
}
