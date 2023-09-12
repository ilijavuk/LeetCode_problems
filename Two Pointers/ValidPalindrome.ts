/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.



Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */

/* First Version - 64ms (77.79%) | 47.59MB (38.26%) */
function isPalindrome(s: string): boolean {
    let clean = "";

    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if ((code > 47 && code < 58) || (code > 96 && code < 123))
            clean += s[i];
        if(code > 64 && code < 91)
            clean += s[i].toLowerCase();
    }

    for(let i = 0, len=clean.length; i < len/2; i++) {
        if(clean[i] !== clean[len-1-i])
            return false
    }
    return true
};
