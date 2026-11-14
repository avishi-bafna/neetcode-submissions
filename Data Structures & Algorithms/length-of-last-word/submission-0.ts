class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        s = s.trim();
        let arr = s.split(" ");
        return arr[arr.length-1].length
    }
}
