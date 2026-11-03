class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        let finalArr = [], poppedEle;
        k = k % nums.length;
        while(k>0){
            poppedEle = nums.pop();
            finalArr.push(poppedEle);
            k--;
        }
        finalArr = finalArr.reverse();
        nums.unshift(...finalArr)
    }
}
