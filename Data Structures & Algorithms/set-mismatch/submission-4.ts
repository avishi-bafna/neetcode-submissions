class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums: number[]): number[] {
        let finalArr: number[] = [];
        let duplicate = 0;
        let missing = 0;
        let seen = new Set<number>();

        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                duplicate = nums[i];
            } else {
                seen.add(nums[i]);
            }
        }

        for (let i = 1; i <= nums.length; i++) {
            if (!seen.has(i)) {
                missing = i;
                break;
            }
        }

        finalArr.push(duplicate);
        finalArr.push(missing);

        return finalArr;
    }
}
