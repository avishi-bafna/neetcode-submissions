class Solution {
    /**
     * @param {number} columnNumber
     * @return {string}
     */
    convertToTitle(columnNumber: number): string {
        let alphabets = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        let title = "";

        while (columnNumber > 0) {
            columnNumber--;

            let r = columnNumber % 26;

            title = alphabets[r + 1] + title;

            columnNumber = Math.floor(columnNumber / 26);
        }

        return title;
    }
}
