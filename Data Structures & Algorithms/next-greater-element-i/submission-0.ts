class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        let m = new Map(), arr=[];
        for(let i = 0; i < nums2.length; i++){
            m.set(nums2[i], -1);
            for(let j=i+1; j<nums2.length; j++){
                if(nums2[j] > nums2[i]){
                    m.set(nums2[i], nums2[j]);
                    break;
                }
            }
        }
        for(let i=0; i<nums1.length; i++){
            arr.push(m.get(nums1[i]))
        }
        return arr;
    }
}
