class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s: string): number {
        let zeroes=0, ones=0, maxScore=0
        for(let index=1; index<s.length; index++){
            let part1 = s.substring(0, index); 
            let part2 = s.substring(index); 
            zeroes = part1.split("0").length - 1
            ones = part2.split("1").length - 1
            maxScore = Math.max(zeroes+ones, maxScore)
        }
        return maxScore
    }
}
