/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
PS C:\Users\DELL\OneDrive\Desktop\assignments-master\assignments-master\01-js> npx jest ./tests/findLargestElement.test.js
*/

function findLargestElement(numbers) {
    let maxi = numbers[0];
    let n = numbers.length;

    for (let i = 0; i < n; i++) {
        if (numbers[i] > maxi) {
            maxi = numbers[i];
        }
    }

    return maxi;
}

module.exports = findLargestElement;