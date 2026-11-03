class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let revArr = [], revStr = "";
        s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        for (let i=s.length -1; i>=0; i--){
            revArr.push([...s[i]].reverse().join(''))
        }
        revStr = revArr.join('');
        if (s == revStr){
            return true
        }
        else {
            return false
        }
}
}