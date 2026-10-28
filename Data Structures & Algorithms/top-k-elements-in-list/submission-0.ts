class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let m = new Map<number, number>();
        for(let i=0; i< nums.length; i++){
            if (m.has(nums[i])) {
                m.set(nums[i], m.get(nums[i]) + 1);
            }
            else{
                m.set(nums[i], 1);
            }
        }
        const sortedDesc = new Map(
            [...m.entries()].sort((a, b) => b[1] - a[1])
        );
        let final_arr: Array<number> = []
        for(let j=0; j<k; j++){
            final_arr.push([...sortedDesc.keys()][j]);
        }
        return final_arr;
    }
}
