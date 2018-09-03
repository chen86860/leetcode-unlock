function quickSort(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return arr
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]

  let left = []
  let right = []

  arr.forEach(item => {
    if (item <= pivot) {
      left.push(item)
    } else {
      right.push(item)
    }
  })

  return quickSort(left).concat(pivot, quickSort(right))
}

function bubbleSort(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return arr
  for (let outer = 0; outer < arr.length; outer++) {
    for (let inner = 0; inner < arr.length - outer - 1; inner++) {
      if (arr[inner] > arr[inner + 1]) {
        [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]]
      }
    }
  }
  return arr
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const a = {
  i: 1,
  toString() {
    return a.i++
  }
}

inverseTree = (root) => {
  if (root === null) return root
  [root.left, root.right] = [root.right, root.left]
  if (root.left != null) {
    inverseTree(root.left)
  }
  if (root.right != null) {
    inverseTree(root.right)
  }
  return root


}

function calc = () => {
  let dom = document.queryCommandEnabled('eeee')
  let domList = Array.from(dom)
  console.log(domList)
}

DelayNodefdlfd
fdfld
fldfldfdsfllldlf;dl;fdf.d;f.d;fd;fld;.d;.d;lfd;fd;d;fld;.fd;f.d;f.d.fd;lfd;lengthld;fld;lfd;
d;

