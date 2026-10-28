class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //let test=[], test1
        for(let i=0; i<nums.length-1; i++){
            for(let j=1; j<nums.length; j++){
                //test[0] = nums[i]
                //test[1] = nums[j]
                if(nums[i] + nums[j] == target && (i != j)){
                    return [i, j]
                }
            }
        }
    }
}
