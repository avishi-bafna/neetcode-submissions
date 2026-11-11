class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {
        const codes: number[] = Array.from(s, (c) => c.charCodeAt(0)); 
        let sum = 0;
        for(let i=1; i<codes.length; i++){
            sum += Math.abs(codes[i-1] - codes[i])
        }
        return sum;
    }
}
