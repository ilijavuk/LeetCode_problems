/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.


Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 */

/* First Version - 548ms (23.75%) | 66.86MB (18.65%) */
function threeSum(nums: number[]): number[][] {
    const results = new Set<string>();
    const sorted = nums.sort((a,b) => a-b)

    for(let i = 0; i < sorted.length-2;i++) {
        let j = i+1, k = sorted.length-1;

        while(j < k) {
            const sum = sorted[i]+sorted[j]+sorted[k];
            if (sum === 0) {
                results.add(`${sorted[i]},${sorted[j]},${sorted[k]}`);
                j++;
            }
            if(sum < 0) j++;

            if(sum > 0) k--;
        }
    }
    return Array.from(results).map(triplet => triplet.split(',').map(Number));
};