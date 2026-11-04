class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let resultStr = "";
        if(s == s.split('').reverse().join('')){
            return true;
        }
        for(let i=0; i<s.length; i++){
            resultStr = s.slice(0, i) + s.slice(i + 1);
            if(resultStr == resultStr.split('').reverse().join('')){
                return true;
            }
        }
        return false;
    }
}
