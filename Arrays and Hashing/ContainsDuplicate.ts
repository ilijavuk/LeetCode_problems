/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

function containsDuplicate(nums: number[]): boolean {
    for(let i = 0; i < nums.length; i++) {
        const firstOccurrenceIndex = nums.findIndex(firstNum => firstNum == nums[i]);
        if(firstOccurrenceIndex != i) return true;
    }
    return false;
}
