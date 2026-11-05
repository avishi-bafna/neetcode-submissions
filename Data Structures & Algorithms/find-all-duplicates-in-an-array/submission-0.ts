class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDuplicates(nums: number[]): number[] {
        let m = new Map(), finalArr = [];
        for(let i=0; i<nums.length; i++){
            if(m.has(nums[i])){
                m.set(nums[i], m.get(nums[i]) + 1)
            } else {
                m.set(nums[i], 1)
            }
        }
        for (const [key, value] of m) {
            if (value == 2){
                finalArr.push(key);
            }
        }
        return finalArr;
    }
}
