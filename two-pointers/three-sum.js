// Problem: 3Sum
// Link: https://leetcode.com/problems/3sum/
// Difficulty: Medium

// Approach:
// - Sort the array
// - Use two pointers for the remaining elements
// - Skip duplicates

// Time Complexity: O(n^2)
// Space Complexity: O(n^2)

function threeSum(nums) {
    let arr = []
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        while (right > left) {
            // Brute Force Approach: 
            // if( right < nums.length - 1 && nums[right] == nums[right + 1] ) {
            //     right--;
            //     continue
            //     };
            // if( left > i + 1 && nums[left] == nums[left - 1] ) {
            //     left++;
            //     continue
            //     };
            const sum = nums[i] + nums[right] + nums[left];
            if (sum > 0) {
                right--;
            }
            else if (sum < 0) left++;
            else {
                arr.push([nums[i], nums[left], nums[right]]);
                left++;
                // right--;
                while (nums[left] == nums[left - 1] && left < right)
                    left += 1
            }

        }
    }
    return arr;
}