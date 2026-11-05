class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1: number[], nums2: number[]): number[] {
        let finalArr = [];
        nums1 = [...new Set(nums1)];
        nums2 = [...new Set(nums2)];
        if (nums1.length >= nums2.length){
            for (let i=0; i<nums1.length; i++){
                if(nums2.includes(nums1[i])){
                    finalArr.push(nums1[i])
                }
            }
        } else {
            for (let i=0; i<nums2.length; i++){
                if(nums1.includes(nums2[i])){
                    finalArr.push(nums2[i])
                }
            }
        }
        return finalArr;
    }
}
