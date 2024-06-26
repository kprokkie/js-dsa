// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let width = 0;
    const levelArr = [];

    const stop = "stop";
    const arr = [root, stop];

    while (arr.length) {
        const item = arr.shift();

        if (item !== stop) {
            width++;
            if (item.children) {
                arr.push(...item.children);
            }
        } else {
            if (arr.length) {
                arr.push(stop);
            }
            levelArr.push(width);
            width = 0;
        }
    }

    console.log(levelArr);

    return levelArr;
}

module.exports = levelWidth;
