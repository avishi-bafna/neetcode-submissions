class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path: string): boolean {
        const visited = new Set<string>();

        let x = 0;
        let y = 0;

        visited.add("0,0");

        for (const ch of path) {
            if (ch === 'N') {
                y++;
            } else if (ch === 'S') {
                y--;
            } else if (ch === 'E') {
                x++;
            } else if (ch === 'W') {
                x--;
            }

            const position = `${x},${y}`;

            if (visited.has(position)) {
                return true;
            }

            visited.add(position);
        }

        return false;
    }
}
