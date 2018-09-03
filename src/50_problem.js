// ================================================
// 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回 
function removeWithoutCopy(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      arr.splice(i, 1)
      i--
    }
  }
  return arr
}
// ================================================
// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组 
function append(arr, item) {
  return arr.concat([item])
}
// ================================================

// ================================================
// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组 
function truncate(arr) {
  return arr.slice(0, - 1);
}

//利用slice
function truncate(arr) {
  return arr.slice(0, -1);
}
//利用filter
function truncate(arr) {
  return arr.filter((e, i, ar) => {
    return i !== ar.length - 1
  })
}

//利用push.apply+pop
function truncate(arr) {
  var newArr = [];
  [].push.apply(newArr, arr);
  newArr.pop();
  return newArr;
}
//利用join+split+pop    注意！！！：数据类型会变成字符型
function truncate(arr) {
  var newArr = arr.join().split(',');
  newArr.pop();
  return newArr;
}
//利用concat+pop 
function truncate(arr) {
  var newArr = arr.concat();
  newArr.pop();
  return newArr;
}
//普通的迭代拷贝
function truncate(arr, item) {
  var newArr = [];
  for (var i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
// ================================================

// ================================================
// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组 
function prepend(arr, item) {
  return [item].concat(arr)
}

// 利用apply
function prepend(arr, item) {
  var newArr = [];
  [].push.apply(newArr, arr);
  newArr.unshift(item)
  return newArr
}

// ================================================
// 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组 
function curtail(arr) {
  return arr.filter(function (e, i, a) {
    return i !== 0
  })
}

// 利用apply
function curtail(arr, item) {
  var newArr = [];
  [].push.apply(newArr, arr);
  newArr.shift()
  return newArr
}

//利用concat+pop 
function truncate(arr) {
  var newArr = arr.concat();
  newArr.shift();
  return newArr;
}
// ================================================

// ================================================
// 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组 
function concat(arr1, arr2) {
  return arr1.concat(arr2)
}

function concat(arr1, arr2) {
  var newArr = arr1.concat();
  [].push.apply(newArr, arr2);
  return newArr
}
// ================================================
// ================================================
// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组 
function insert(arr, item, index) {
  return arr.slice(0, index).concat(item, arr.slice(index))
}

// 利用splice
function insert(arr, item, index) {
  // 复制数组
  var newArr = arr.concat()
  // var newArr = arr.slice(0)
  // var newArr = [].push.apply(newArr,arr)
  newArr.splice(index, 0, item)
  return newArr
}
// ================================================

// ================================================
function count(arr, item) {
  let count = 0;
  arr.forEach(function (e) {
    e == item ? count++ : 0
  });
  return count;
}

// ================================================
// 找出数组 arr 中重复出现过的元素 
function duplicates(arr) {
  var tmp = [];
  var duplicate = [];
  var res = []
  arr.forEach(function (e) {
    if (tmp.indexOf(e) > -1) {
      duplicate[e] ? (duplicate[e])++ : duplicate[e] = 1
    } else {
      tmp.push(e);
    }
  });
  for (var item in duplicate) {
    item && res.push(item)
  }
  return res
}
// ================================================
// ================================================

function square(arr) {
  return arr.map((e) => {
    return e * e
  })
}

// ================================================
// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置 
function findAllOccurrences(arr, target) {
  var result = [];
  arr.forEach(function (e, i, a) {
    e == target ? result.push(i) : 0
  })
  return result
}
// ================================================

// ================================================
// 实现一个打点计时器，要求
// 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 3、第一个数需要立即输出
function count(start, end) {
  var timer = null;
  var step = end - start;
  var i = 0;
  timer = setInterval(function () {
    console.log(start++)
    i++
    if (i >= step) {
      clearInterval(timer)
    }
  }, 1000 * i)
  return {
    cancle() {
      console.log('try cancle')
      clearInterval(timer)
    }
  }
}
// ================================================
// 题目描述
// 实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
// 1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
// 2、如果 num 能被 3 整除，返回字符串 fizz
// 3、如果 num 能被 5 整除，返回字符串 buzz
// 4、如果参数为空或者不是 Number 类型，返回 false
// 5、其余情况，返回参数 num 
// 输入例子:
// fizzBuzz(15)

// 输出例子:
// fizzbuzz
// ================================================

function fizzBuzz(num) {
  var result = ''
  if (!num || typeof num !== 'number') return false
  if (num % 3 === 0) {
    result += 'fizz'
  }
  if (num % 5 === 0) {
    result += 'buzz'
  }
  return result || num
}
// ================================================

// ================================================
// 将数组 arr 中的元素作为调用函数 fn 的参数 
// 输入例子:

// argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!'])

// 输出例子:

// Hello, Ellie!
// ================================================

// 用函数可以使用call或者apply这两个方法，
// 区别在于call需要将传递给函数的参数明确写出来，是多少参数就需要写多少参数。
// 而apply则将传递给函数的参数放入一个数组中，传入参数数组即可。 
function argsAsArray(fn, arr) {
  return fn.apply(this, arr);
 }

// 函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。 
// 输入例子:
// useArguments(1, 2, 3, 4)

// 输出例子:
// 10

// ================================================
function useArguments() {
  return [].slice.call(arguments).reduce(function (acc, val) { return acc + val }, 0)
}

// ================================================
// ================================================


// 二分搜索算法

// function binarySearch(target, arr, start, end) {
//   var start = start || 0;
//   var end = end || arr.length - 1;

//   var mid = parseInt(start + (end - start) / 2);
//   if (target == arr[mid]) {
//     return mid;
//   } else if (target > arr[mid]) {
//     return binarySearch(target, arr, mid + 1, end);
//   } else {
//     return binarySearch(target, arr, start, mid - 1);
//   }
//   return -1;
// }


// Array.prototype.binary_search = function (low, high, khey) {
//   if (low > high) return -1
//   let mid = parseInt(high - low / 2)
//   if (mid < khey) {
//     return this.binary_search(low, mid, khey)
//   } else if (mid > khey) {
//     return this.binary_search(mid, high, khey)
//   }
//   return mid
// }


function binary_search(target, arr, low, high) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    console.error(new Error("parasm'arr' is not an array,please check your input")); return
  }
  let start = low || 0
  let end = high || arr.length - 1

  let mid = parseInt((end + start) / 2, 10)
  if (start > end) return -1
  if (target < arr[mid]) {
    return binary_search(target, arr, start, mid - 1)
  }
  if (target > arr[mid]) {
    return binary_search(target, arr, mid + 1, end)
  }
  return mid
}

// lazyman
function _lazyman(name) {
  this.tasks = []
  var self = this;
  var fn = (function (n) {
    var name = n
    return function () {
      console.log('Hi this is ' + name + '!')
      self.next()
    }
  })(name)
  this.tasks.push(fn)
  setTimeout(function () {
    self.next()
  }, 0)
}

_lazyman.prototype.next = function () {
  var fn = this.tasks.shift()
  fn && fn();
}

_lazyman.prototype.eat = function (name) {
  var self = this
  var fn = (function (n) {
    var name = n
    return function () {
      console.log('Eat' + name + '~')
      self.next()
    }
  })(name)

  this.tasks.push(fn)
  return this
}

_lazyman.prototype.sleep = function (time) {
  var self = this
  var fn = (function (t) {
    var time = t
    return function () {
      setTimeout(function () {
        console.log('Wake up after ' + time)
        self.next()
      }, time * 1000)
    }
  })(time)
  this.tasks.push(fn)
  return this
}

_lazyman.prototype.sleepFirst = function (time) {
  var self = this
  var fn = (function (t) {
    var time = t
    return function () {
      setTimeout(function () {
        console.log('Wake up after ' + time)
        self.next()
      }, time * 1000)
    }
  })(time)
  this.tasks.unshift(fn)
  return this
}

function LazyMan(name) {
  return new _lazyman(name)
}

// 函数去重
let arr = [1, 1, 'true', true, true, 5, 'F', false, undefined, null, null, undefined, NaN, {}, {}, '{}', 0, 1, 'a', 'a', NaN]
arr.filter((item, index, arr) => arr.indexOf(item) === index)