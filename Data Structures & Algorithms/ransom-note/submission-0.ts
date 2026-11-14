class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote: string, magazine: string): boolean {
        const freq = {};

        for (const char of magazine) {
            freq[char] = (freq[char] || 0) + 1;
        }

        for (const char of ransomNote) {
            if (!freq[char]) {
                return false;
            }

            freq[char]--;
        }

        return true;
    }
}
