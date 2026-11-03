class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let totalPro = 1, arr = [];
        let zeroCount = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                zeroCount++;
            } else {
                totalPro *= nums[i];
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 1) {
                arr.push(0);
            } 
            else if (zeroCount === 1) {
                arr.push(nums[i] === 0 ? totalPro : 0);
            } 
            else {
                arr.push(totalPro / nums[i]);
            }
        }
        return arr;
    }
}
