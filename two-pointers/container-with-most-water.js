// Problem: Container With Most Water
// Link: https://leetcode.com/problems/container-with-most-water/
// Difficulty: Medium

// Approach:
// - Use two pointers, one at the beginning and one at the end
// - Calculate the area and move the pointer with smaller height

// Time Complexity: O(n)
// Space Complexity: O(1)

function containerWithMostWater(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

// Example usage:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(containerWithMostWater(height)); // Output: 49