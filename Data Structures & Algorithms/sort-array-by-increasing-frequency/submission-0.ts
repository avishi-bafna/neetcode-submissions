class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums: number[]): number[] {
        let m = new Map(), finalArr = [];
        for (let i=0; i<nums.length; i++){
            if(m.has(nums[i])){
                m.set(nums[i], m.get(nums[i]) + 1)
            } else {
                m.set(nums[i], 1)
            }
        }
        const sortedMap = new Map(
            Array.from(m.entries()).sort((a, b) => {
                if (a[1] === b[1]) {
                    return b[0] - a[0]; // Decreasing value
                }
                return a[1] - b[1]; // Increasing frequency
            })
        );
        for (const [key, value] of sortedMap){
            for(let j=0; j<value; j++){
                finalArr.push(key);
            }
        }
        return finalArr;
    }
}
