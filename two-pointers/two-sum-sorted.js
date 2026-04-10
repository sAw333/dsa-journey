// Problem: Two Sum II
// Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Difficulty: Easy

// Approach:
// - Use two pointers, one at the beginning and one at the end
// - Adjust pointers based on the sum compared to the target

// Time Complexity: O(n)
// Space Complexity: O(1)

function twoSumSorted(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

// Example usage:
const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSumSorted(numbers, target)); // Output: [0, 1]