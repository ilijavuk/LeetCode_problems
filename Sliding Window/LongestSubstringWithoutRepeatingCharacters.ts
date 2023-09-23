/*
Given a string s, find the length of the longest
substring
 without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

 */

/* First Version - 159ms (27.83%) | 49.09MB (39.58%) */
function lengthOfLongestSubstring(s: string): number {
    let l = 0, r = 1, currMax = 0;

    if(s.length == 0 || s.length == 1) return s.length;

    while (l < r && r < s.length){
        if(r-l > currMax) currMax = r-l;
        if(s.slice(l, r).includes(s[r])) {
            l++;
            r = l;
        }
        r++;
    }

    if(r-l > currMax) currMax = r-l;
    return currMax;
};