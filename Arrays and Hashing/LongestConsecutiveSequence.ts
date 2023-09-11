/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.



Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9


Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

/* First Version - 98ms (90.94%) | 51.42MB (95.94%) */
function longestConsecutive(nums: number[]): number {
    if(!nums.length) return 0;

    const sortedNums = nums.sort((a, b) => a-b);

    let longestSequence = 1;
    let maxLongestSequence = 1;
    for(let i = 1; i < sortedNums.length; i++) {
        const prev = sortedNums[i-1];
        const curr = sortedNums[i];
        if(prev == curr) continue;
        if((prev != 0 && Math.abs(curr-prev) === 1) || (prev == 0 && curr == 1)) {
            longestSequence++;
        } else {
            if(longestSequence > maxLongestSequence) maxLongestSequence = longestSequence;
            longestSequence = 1;
        }
    }

    return Math.max(longestSequence, maxLongestSequence);
};