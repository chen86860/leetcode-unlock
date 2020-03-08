/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.24%)
 * Total Accepted:    320.3K
 * Total Submissions: 795.8K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 *
 * Example 1:
 *
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 *
 * Example 2:
 *
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 *
 *
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const partNumbers = []
  let rawNumber = 0
  digits.forEach((item, index) => {
    const increase = item * Math.pow(10, digits.length - index - 1)
    if (rawNumber + increase > Number.MAX_SAFE_INTEGER) {
      partNumbers.push(rawNumber)
      rawNumber = 0
    }
    rawNumber += increase
  })
  return ('' + ++rawNumber).split('')
}
