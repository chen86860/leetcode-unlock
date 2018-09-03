/**
 * 
 5. Longest Palindromic Substring
 
  Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
  
  Example 1:
  
  Input: "babad"
  Output: "bab"
  Note: "aba" is also a valid answer.

  Example 2:
  
  Input: "cbbd"
  Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (typeof s !== 'string' || s === '') return ''
  function matchPalindrome(str) {
    var rightStrIndex = str.length % 2 === 0 ? str.length / 2 : str.length / 2 + 1
    var leftStr = str.substr(0, str.length / 2)
    var rightStr = str
      .substr(rightStrIndex)
      .split('')
      .reverse()
      .join('')

    return leftStr === rightStr
  }
  var str = s

  // set the default resolve value
  var matchStr = str.substr(0, 1)
  var matchFlag = false
  var strLength = str.length

  for (var i = strLength; i > 0; i--) {
    var count = i
    for (var j = 0; j <= strLength - i; j++) {
      var fromIndex = j
      var subStr = str.substr(fromIndex, count)
      if (subStr && subStr.length === count && matchPalindrome(subStr)) {
        matchFlag = true
        matchStr = subStr
        break
      }
    }
    if (matchFlag) break
  }
  return matchStr
}
longestPalindrome('dd')
