class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let temp = []
        for(let i=0; i<m; i++){
            temp.push(nums1[i])
        }
        for(let i=0; i<n; i++){
            temp.push(nums2[i])
        }
        temp.sort((a, b) => a - b);
        for (let i = 0; i < m + n; i++) {
            nums1[i] = temp[i];
        }
        return nums1
    }
}
