class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    squareOfDigits(n: number): number{
        let strNum = n.toString();
        let sum=0;
        for (let i=0; i<strNum.length; i++){
            sum = sum + Number(strNum[i])*Number(strNum[i]);
        }
        return sum;
    }
    isHappy(n: number): boolean {
        let arr = [n];
        let toStop = false, ans, sum=0;
        while(!toStop){
            sum = this.squareOfDigits(arr.at(-1))
            if(sum === 1){
                toStop = true;
                ans = true;
            }
            else if (arr.includes(sum)){
                toStop = true;
                ans = false;
            } else {
                arr.push(sum)
            }
        }
        return ans;
    }
}
