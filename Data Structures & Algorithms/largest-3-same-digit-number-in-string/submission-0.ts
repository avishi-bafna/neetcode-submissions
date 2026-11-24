class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num: string): string {
        let max = "";

        for (let i = 0; i <= num.length - 3; i++) {
            if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
                const current = num[i].repeat(3);

                if (current > max) {
                    max = current;
                }
            }
        }

        return max;
    }
}
