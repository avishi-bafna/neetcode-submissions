class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words: string[]): string[] {
        let finalArr = [], newFinalArr = [];
        for (let i=0; i<words.length; i++){
            for (let j=0; j<words.length; j++){
                if(i != j && words[i].includes(words[j])){
                    finalArr.push(words[j])
                }
            }
        }
        for(let i=0; i<finalArr.length; i++){
            if(!newFinalArr.includes(finalArr[i])){
                newFinalArr.push(finalArr[i])
            }
        }
        return newFinalArr;
    }
}
