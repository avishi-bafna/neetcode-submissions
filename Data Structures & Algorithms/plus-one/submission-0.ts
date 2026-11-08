class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let num = BigInt(digits.join('')) + 1n;
        return num.toString().split('').map(Number);
    }
}
