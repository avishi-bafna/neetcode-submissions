class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let newArr: number[] = [];

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "C") {
                newArr.pop();

            } else if (operations[i] === "D") {
                let ele = newArr[newArr.length - 1] * 2;
                newArr.push(ele);

            } else if (operations[i] === "+") {
                let last = newArr[newArr.length - 1];
                let secondLast = newArr[newArr.length - 2] ?? 0;

                newArr.push(last + secondLast);

            } else {
                newArr.push(Number(operations[i]));
            }
        }

        return newArr.reduce((sum, num) => sum + num, 0);
    }
}
