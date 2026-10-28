class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        if(a>0 && b>0){
            return a+b
        } else if(a<0 && b>0){
            return a+b
        } else if(a>0 && b<0){
            return b+a
        } else {
            return a+b
        }
    }
}
