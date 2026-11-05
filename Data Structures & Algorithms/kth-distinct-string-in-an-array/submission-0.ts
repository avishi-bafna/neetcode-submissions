class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr: string[], k: number): string {
        let distinctArr = [], m = new Map();
        for(let i=0; i<arr.length; i++){
            if(m.has(arr[i])){
                m.set(arr[i], m.get(arr[i]) + 1);
            } else {
                m.set(arr[i], 1);
            }
        }
        for (const [key, value] of m){
            if (value == 1){
                distinctArr.push(key);
            }
        }
        if (distinctArr.length >= k) {
            return distinctArr[k-1];
        } else {
            return "";
        }
    }
}
