class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */
    findDifference(nums1: number[], nums2: number[]): number[][] {
        let finalArr = [], arr1Diff = [], arr2Diff = [];
        for(let i=0; i<nums1.length; i++){
            if(!nums2.includes(nums1[i]) && !arr1Diff.includes(nums1[i])){
                arr1Diff.push(nums1[i]);
            }
        }
        for(let i=0; i<nums2.length; i++){
            if(!nums1.includes(nums2[i]) && !arr2Diff.includes(nums2[i])){
                arr2Diff.push(nums2[i]);
            }
        }
        finalArr.push(arr1Diff);
        finalArr.push(arr2Diff);
        return finalArr;
    }
}
