// Problem: Two Sum
// Link: https://leetcode.com/problems/two-sum/
// Difficulty: Easy

// Approach:
// - Use hashmap to store visited elements
// - Check complement in O(1)

// Time Complexity: O(n)
// Space Complexity: O(n)

function twoSum(nums, target) {
    const pairIdx = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in pairIdx) {
            return [i, pairIdx[target - num]];
        }
        pairIdx[num] = i;
    }
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1] || [1, 0]