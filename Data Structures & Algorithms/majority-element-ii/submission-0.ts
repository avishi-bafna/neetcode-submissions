class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        let maxCount = Math.floor(nums.length / 3);
        let m = new Map();
        let finalArr = [];
        for(let i=0; i<nums.length; i++){
            if(m.has(nums[i])){
                m.set(nums[i], m.get(nums[i]) + 1)
            } else {
                m.set(nums[i], 1)
            }
        }
        for (const [key, value] of m) {
            if(value > maxCount){
                finalArr.push(key);
            }
        }
        return finalArr;
    }
}
