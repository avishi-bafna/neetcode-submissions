class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    frequencySort(s: string): string {
        let m = new Map(), newStr = "";
        for(let i=0; i<s.length; i++){
            if(m.has(s[i])){
                m.set(s[i], m.get(s[i])+1)
            } else {
                m.set(s[i], 1)
            }
        }
        m = new Map([...m.entries()].sort((a, b) => b[1] - a[1]));
        for(const [key,value] of m){
            for(let i=0; i<value; i++){
                newStr += key;
            }
        }
        return newStr;
    }
}
