/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.


Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

function topKFrequent(nums: number[], k: number): number[] {
    const results = {}
    nums.forEach((num, index) => {
        if(results[num]){
            results[num]++;
        } else {
            results[num] = 1;
        }
    })
    const sortedResults = Object.entries(results).sort((x, y) => +y[1] - +x[1]);
    return sortedResults.slice(0, k).map(item => +item[0]);
};