/**
 * @param {number[]} nums
 * @return {number}
 */
// LC169
var majorityElement = function (nums) {

    if (!nums) {
        return 0;
    }

    let len = nums.length;

    // #2
    let majorityElement = nums[0];
    let count = 1;
    for (let i = 1; i < len; i++) {
        if (majorityElement !== nums[i]) {
            count--;
            if (!count) {
                majorityElement = nums[i];
                count = 1;
            }
        } else {
            count++;
        }
    }

    return majorityElement;
    // #1
    // let dict = {};
    // for (let i = 0; i < len; i++) {
    //     let num = nums[i];
    //     if (!dict[num]) {
    //         dict[num] = 1;
    //     } else {
    //         dict[num] += 1;
    //     }

    //     if (dict[num] > len / 2) {
    //         return num;
    //     }
    // }
    // return 0;
};