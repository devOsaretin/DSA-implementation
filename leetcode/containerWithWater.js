/**  You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container. */

/**
 * @param {number[]} height
 * @return {number}
 */

// brute force solution O(n2)
var maxArea = function (height) {
	let maxArea = Number.MIN_SAFE_INTEGER;

	for (let p1 = 0; p1 < height.length; p1++) {
		for (let p2 = p1 + 1; p2 < height.length; p2++) {
			let calCulatedMaxArea = Math.min(height[p1], height[p2]) * (p2 - p1);
			maxArea = Math.max(calCulatedMaxArea, maxArea);
		}
	}

	return maxArea;
};

// optimized solution O(n)
var maxArea = function (height) {
	let maxArea = Number.MIN_SAFE_INTEGER;
	let left = 0;
	let right = height.length - 1;
	while (right > left) {
		let calCulatedMaxArea =
			Math.min(height[right], height[left]) * (right - left);
		maxArea = Math.max(calCulatedMaxArea, maxArea);

		if (height[right] > height[left]) {
			left++;
		} else {
			right--;
		}
	}

	return maxArea;
};
