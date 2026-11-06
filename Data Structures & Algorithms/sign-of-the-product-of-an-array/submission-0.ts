class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    arraySign(nums: number[]): number {
        let negativesCount = 0;
        if(nums.includes(0)){
            return 0;
        } else {
            for(let i=0; i<nums.length; i++){
                if(nums[i]<0) {
                    negativesCount++;
                }
            }
            if (negativesCount % 2 == 0){
                return 1;
            } else {
                return -1;
            }
        }
    }
}
