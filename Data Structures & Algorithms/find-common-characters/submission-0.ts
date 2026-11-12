class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    commonChars(words: string[]): string[] {
        let commonChars: string[] = [];

        for (let j = 0; j < words[0].length; j++) {
            let count = 0;

            for (let i = 0; i < words.length; i++) {
                if (words[i].includes(words[0][j])) {
                    count++;
                } else {
                    break;
                }
            }

            if (count == words.length) {
                commonChars.push(words[0][j]);

                // Remove this character so it isn't reused
                words = words.map((word, i) =>
                    i === 0 ? word : word.replace(words[0][j], "")
                );
            }
        }

        return commonChars;
    }
}
