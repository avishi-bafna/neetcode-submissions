class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let firstWord = strs[0], common= "", count=0;
        for (let j=0; j<firstWord.length; j++){
            count = 0;
            for (let i=0; i<strs.length; i++){
                if(strs[i][j] == firstWord[j]){
                    count++;
                }
                else {
                    break;
                }
            }
            if (count == strs.length){
                common = common + firstWord[j]
            } else {
                break;
            }
        }
        return common
    }
}
