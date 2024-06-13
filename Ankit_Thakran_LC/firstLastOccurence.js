/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// LC34
var searchRange = function (nums, target) {

    if (!nums) {
        return [-1, -1];
    }

    var getFirst = function (nums, target) {
        let s = 0;
        let e = nums.length - 1;
        let first = -1;
        while (s <= e) {
            let mid = Math.floor((s + e) / 2);
            if (nums[mid] === target) {
                first = mid;
                e = mid - 1; // LHS for first pos
                // return mid;
            } else if (nums[mid] < target) {
                s = mid + 1;
            } else if (nums[mid] > target) {
                e = mid - 1;
            }
        }
        return first;
    }

    var getLast = function (nums, target) {
        let s = 0;
        let e = nums.length - 1;
        let last = -1;
        while (s <= e) {
            let mid = Math.floor((s + e) / 2);
            if (nums[mid] === target) {
                last = mid;
                s = mid + 1; // RHS for last pos
                // return mid;
            } else if (nums[mid] < target) {
                s = mid + 1;
            } else if (nums[mid] > target) {
                e = mid - 1;
            }
        }
        return last;
    }

    var first = getFirst(nums, target);
    var last = getLast(nums, target);

    return [first, last]
};