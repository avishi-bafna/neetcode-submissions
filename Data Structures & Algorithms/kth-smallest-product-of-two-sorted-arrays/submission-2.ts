class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @param {number} k
     * @return {number}
     */
    kthSmallestProduct(nums1: number[], nums2: number[], k: number): number {
        let left = -10000000000;
        let right = 10000000000;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            let count = 0;

            for (let i = 0; i < nums1.length; i++) {
                let l = 0;
                let r = nums2.length;

                if (nums1[i] > 0) {
                    while (l < r) {
                        let m = Math.floor((l + r) / 2);

                        if (nums2[m] <= mid / nums1[i])
                            l = m + 1;
                        else
                            r = m;
                    }
                    count += l;

                } else if (nums1[i] < 0) {
                    while (l < r) {
                        let m = Math.floor((l + r) / 2);

                        if (nums2[m] < mid / nums1[i])
                            l = m + 1;
                        else
                            r = m;
                    }
                    count += nums2.length - l;

                } else if (mid >= 0) {
                    count += nums2.length;
                }
            }

            if (count >= k)
                right = mid;
            else
                left = mid + 1;
        }

        return left;
    }
}
