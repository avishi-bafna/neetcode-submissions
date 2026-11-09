class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums: number[]): boolean {
        if(nums.length % 2 != 0){
            return false;
        }
        let m = new Map();
        for (let i = 0; i < nums.length; i++){
            if(m.has(nums[i])){
                m.set(nums[i], m.get(nums[i]) + 1)
            } else {
                m.set(nums[i], 1)
            }
        }
        for (const [key,value] of m){
            if(value % 2 != 0){
                return false;
            }
        }
        return true;
    }
}
