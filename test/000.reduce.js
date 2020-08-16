const obj = {
  a: {
    b: {
      c: '1.png',
    },
  },
}

const str = 'a/b/c/1.png'
// str.split('/').reduceRight((prev, curr) => ({
//   [curr]: prev,
// }))

;[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  console.log('accumulator', accumulator)
  console.log('currentValue', currentValue)
  console.log('currentIndex', currentIndex)
  console.log('array', array)

  return accumulator
})
