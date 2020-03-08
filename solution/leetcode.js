/**
 * 将url解析成对象
 * @param {any} str 
 * @returns 
 * 
 * 例如：
 * 将
 *    http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled
 * 转换成
 * {
    user: 'anonymous',
    id: [123, 456],     // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
    city: '北京',        // 中文
    enabled: true,      // 未指定值的 key 约定值为 true
    }
 * 
 */

function parse(str) {
  // 防御性编程
  if (typeof str !== 'string') {
    return {}
  }
  let param = {}
  let paramStr = decodeURI(str).split('?')
  let paramArr = paramStr[1].split('&')

  for (let i = 0; i < paramArr.length; i++) {
    let tmp = paramArr[i].split('=')
    // 将key-value分开命名，有助于可读性
    let key = tmp[0]
    let value = tmp[1] || true
    // 判断value值是否是数字型
    // 同时可考虑输出的数字的格式：整型、浮点型
    if (typeof value === 'string' && isNaN(Number(value)) === false) {
      value = Number(value)
    }

    if (typeof param[key] === 'undefined') {
      param[key] = value
    } else {
      // 判断值是否是数组、否的话将加入一个数组
      newValue = Array.isArray(param[key]) ? param[key] : [param[key]]
      newValue.push(value)
      param[key] = newValue
    }
  }
  return param
}

function parse(str) {
  if (typeof str !== 'string') {
    return {}
  }

  return decodeURI(str)
    .split('&')
    .map(param => {
      const tmp = param.split('=')
      const key = tmp[0]
      let value = tmp[1] || true
      if (typeof value === 'string' && isNaN(Number(value)) === false) {
        value = Number(value)
      }

      return { key, value }
    })
    .reduce((params, item) => {
      const { key, value } = item
      if (typeof params[key] === 'undefined') {
        params[key] = value
      } else {
        params[key] = Array.isArray(params[key]) ? params[key] : [params[key]]
        params[key].push(value)
      }

      return params
    }, {})
}

// 反转字符串
function reverse(str) {
  if (typeof str != 'string') {
    return ''
  }
  Array.prototype.map
    .call(str, e => {
      return e
    })
    .reverse()
    .join('')
}

// 计算数组项目的出现次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
var countNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++
  } else {
    allNames[name] = 1
  }
  return allNames
}, {})

/* 1.Two sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
Subscribe to see which companies asked this question.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // if (typeof s !== 'string') return
  // if (s.length === 0) return 0

  // let target = s.split('')
  // let matched = []
  // target.reduce((acc, val, index) => {
  //   let tmp = [val]
  //   for (let i = index + 1; i < target.length; i++) {
  //     if (tmp.includes(target[i])) break;
  //     tmp.push(target[i])
  //   }
  //   matched.push(tmp.length)
  // }, 0)

  // return Math.max.apply(Math, matched)
  const map = {}
  var left = 0

  return s.split('').reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left
    map[v] = i
    return Math.max(max, i - left + 1)
  }, 0)
}

// 7. Reverse Integer
// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321
/**
 * @param {number} x
 * @return {number}
 */
var reverseT = function(x) {
  let tmp = Array.prototype.map
    .call(x.toString(), e => {
      return e
    })
    .reverse()
    .join('')
  let t = x < 0 ? Number('-' + tmp.slice(0, -1)) : Number(tmp)
  console.log(t)
  return t > Math.pow(2, 31) - 1 || t < -Math.pow(2, 31) ? 0 : t
}

//
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(nums) {
  let odd = []
  let even = []

  nums = nums.split(' ').map(e => parseInt(e, 10))

  nums.forEach((e, i) => {
    if (e % 2 === 0) {
      even.push(i + 1)
    } else {
      odd.push(i + 1)
    }
  })

  return odd.length > even.length ? even[0] : odd[0]
}

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.
function XO(str) {
  //code here
  if (typeof str != 'string') return false
  let x = str.split('').filter(e => e.toLowerCase() === 'x').length
  let o = str.split('').filter(e => e.toLowerCase() === 'o').length

  return (x = o)
}

function XO(str) {
  return str.match(/x/gi) === str.match(/o/gi)
}

// 最长子串
function longestPalindrome(s) {
  function matchPalindrome(str) {
    if (str.length % 2 === 0) {
      var leftStr = str
        .slice(0, str.length / 2)
        .split('')
        .join('')
      var rightStr = str
        .slice(str.length / 2)
        .split('')
        .reverse()
        .join('')

      return leftStr === rightStr
    } else {
      var leftStr = str
        .slice(0, str.length / 2)
        .split('')
        .join('')
      var rightStr = str
        .slice(str.length / 2 + 1)
        .split('')
        .reverse()
        .join('')

      return leftStr === rightStr
    }
  }
  var str = s
  var strGroup = []
  for (var i = 1; i < str.length + 1; i++) {
    for (var j = 0; j < str.length; j++) {
      if (i + j <= str.length) {
        strGroup.push(str.substr(j, i))
      }
    }
  }
  var result = []
  strGroup.forEach(function(item) {
    if (item.length === 1) return item
    if (matchPalindrome(item)) {
      result.push(item)
    }
  })
  return result.reduce(function(a, b) {
    return a.length > b.length ? a : b
  })
}
