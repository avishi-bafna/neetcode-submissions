class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order: string, s: string): string {
        let newOrder = "";

        for (let i = 0; i < order.length; i++) {
            for (let j = 0; j < s.length; j++) {
                if (s[j] === order[i]) {
                    newOrder += s[j];
                }
            }
        }

        for (let i = 0; i < s.length; i++) {
            if (!order.includes(s[i])) {
                newOrder += s[i];
            }
        }

        return newOrder;
    }
}
