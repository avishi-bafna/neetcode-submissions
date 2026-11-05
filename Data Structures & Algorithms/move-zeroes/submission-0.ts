class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {            
            if (nums[i] !== 0) {
                [nums[i], nums[count]] = [nums[count], nums[i]];
                count++;
            }
        }
    }
}
