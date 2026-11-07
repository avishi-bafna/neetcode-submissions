class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums: number[]): number[] {
        let finalArr = [];
        for (let i=1; i<=nums.length; i++) {
            if(!nums.includes(i)){
                finalArr.push(i)
            }
        }
        return finalArr;
    }
}
