/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const result = []
  for (let i = 0; i < nums.length; i++ < nums.length) {
    const number1 = nums[i]
    for (let j = i + 1; j < nums.length; j++ < nums.length) {
      const number2 = nums[j]
      if (number1 + number2 === target) {
        result.push(i, j)
        break
      }
    }
    if (result.length > 0) break
  }

  return result
}

// var twoSum = function(nums, target) {
//   // [2,7,11,15]
//   const result = []
//   for (let index = 0; index < nums.length; index++) {
//     const num1 = nums[index]
//     const targetIndex = nums.findIndex((item, _index) => _index !== index && item + num1 === target)
//     if (targetIndex > -1) {
//       result.push(index, targetIndex)
//       break
//     }
//   }
//   return result
// }

// Hash table look up
// var twoSum = function(nums, target) {
//   let map = new Map()
//   for (var i = 0; i < nums.length; i++) {
//     let complement = target - nums[i]
//     if (map.has(complement)) {
//       return [map.get(complement), i]
//     }
//     map.set(nums[i], i)
//   }
// }

console.log(twoSum([3, 2, 4], 6))
