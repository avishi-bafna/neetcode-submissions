class Solution {
    arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
        let str1 = word1.join("");
        let str2 = word2.join("");
        if(str1 === str2){
            return true;
        } else {
            return false;
        }
    }
}
