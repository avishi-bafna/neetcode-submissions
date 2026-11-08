class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let age = 0, count = 0;
        for(let i=0; i<details.length; i++){
            if(Number(details[i].slice(11,13)) > 60)
            {
                count++;
            }
        }
        return count;
    }
}
