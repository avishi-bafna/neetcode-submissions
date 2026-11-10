class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        let leftSum=0, rightSum=0, m=new Map();
        for(let i=0; i<nums.length; i++){
            leftSum=0, rightSum=0;
            for(let j=0; j<i; j++){
                leftSum += nums[j]
            }
            for(let j=i+1; j<nums.length; j++){
                rightSum += nums[j]
            }
            m.set(i, [leftSum, rightSum])
        }
        for(const [key,value] of m){
            if(value[0] == value[1]){
                return key
            }
        }
        return -1
    }
}
