/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.92%)
 * Total Accepted:    320.2K
 * Total Submissions: 1M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const startWith = (prefix, str) => str.substring(0, prefix.length) === prefix

  let longestPrefix = ''

  const orderedStr = strs.sort((a, b) => a.length - b.length)

  const halfFind = strs => {
    if (strs.length === 1) return strs[0]
    return strs[Math.floor((strs.length - 1) / 2)]
  }

  const reverseFind = str => {
    const start = index
  }
}

/**
 *
 * @param {string} str
 * @param {string[]} strs
 * @return {number} index
 */
var halfFind = (str, strs) => {
  let index = -1

  return
}
