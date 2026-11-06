class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        let squaresArr = [];
        for(let i=0; i<nums.length; i++){
            squaresArr.push(nums[i]*nums[i])
        }
        return [...squaresArr].sort((a, b) => a - b); 
    }
}
