class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let s1 = s.length;
        let s2 = t.length;
        let str1 = [], str2=[];
        for(let i=0; i<s1; i++){
            str1[i] = s[i]// + " ";
        }
        for(let i=0; i<s2; i++){
            str2[i] = t[i]// + " ";
        }
        str1 = str1.sort();
        str2 = str2.sort();
        str1 = str1.join("")
        str2 = str2.join("")
        if(str1.toLowerCase() === str2.toLowerCase()){
            return true;
        } else {
            return false;
        }
        //console.log(str1.join(""))
    }
}
