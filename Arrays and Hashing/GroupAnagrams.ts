/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]


Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */

function groupAnagrams(strs: string[]): string[][] {
    const results=[];
    for(let i = 0; i < strs.length; i++) {
        results[i] = [strs[i]];

        for(let j = strs.length-1; j>i ; j--) {
            if(isAnagram(strs[i], strs[j])) {
                results[i].push(strs[j]);
                strs.splice(j, 1);
            }
        }
    }
    return results;
};

function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    const tArray = Array.from(t);
    for(let i = 0; i < s.length; i++) {
        const charIndexInT = tArray.findIndex(tChar => tChar == s[i]);
        if(charIndexInT !== -1) {
            tArray.splice(charIndexInT, 1);
        } else {
            return false;
        }
    }
    return true;
};