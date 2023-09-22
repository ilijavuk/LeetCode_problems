/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.



Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9


Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

 */

/* First Version - Time Limit Exceeded */
function trap(height: number[]): number {
    let r = height.length-1;
    let sum = 0;
    const adjustedHeight = height;
    while(true) {
        let l = 0;
        while(l < r) {
            while(!(adjustedHeight[l] > 0 && adjustedHeight[l+1] == 0 ) && l<=r-1) l++;

            let m = l+2;

            while(adjustedHeight[m] == 0 && m<=r) m++;

            if(adjustedHeight[m]) {
                sum += (m-l-1);
            }
            l = m;
        }


        let max = 0;
        for(let i = 0; i <= r; i++) {
            const adjustedItem = adjustedHeight[i]-1;
            adjustedHeight[i] = Math.max(0,adjustedItem);
            if(adjustedItem > max) max = adjustedItem;
        }

        if(max == 0) return sum;
    }
};

/* Second Version - 70ms (46.26%) | 45.7MB (34.43%) */
function trap(height: number[]): number {
    const minLeftRight = new Array(height.length).fill(0);
    let sum = 0;

    for(let i = 1; i < height.length; i++) {
        minLeftRight[i] = Math.max(minLeftRight[i-1], height[i-1]);
    }
    let postMax = 0;
    for(let i = height.length-1; i >= 0; i--) {
        sum += Math.max(0, Math.min(minLeftRight[i], postMax)-height[i]);
        postMax = Math.max(postMax, height[i]);
    }

    return sum;
};

/* Third Version - 68ms (52.17%) | 45.4MB (49.93%) */
function trap(height: number[]): number {
    let sum = 0;
    let l = 0, r = height.length-1;
    let leftMax = height[l], rightMax = height[r];

    while(l < r) {
        if(leftMax > rightMax){
            r--;
            rightMax = Math.max(rightMax, height[r]);
            sum += rightMax - height[r];
        }
        else {
            l++;
            leftMax = Math.max(leftMax,height[l]);
            sum += leftMax - height[l];
        }
    }
    return sum;
};