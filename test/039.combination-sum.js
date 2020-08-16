// combinationSum([2, 3, 5], 8)
const combinationSum = (candidates, target) => {
  if (candidates.length === 0) return []

  let path = []
  let res = []

  DFS(candidates.sort(), target, 0, path, res)

  return res
}

const DFS = (candidates, target, begin, _path, res) => {
  const path = [..._path]
  // 递归出口
  if (target === 0) {
    res.push(path)
    return
  }

  for (let i = begin; i < candidates.length; i++) {
    // 剪枝条件
    // 如果当前节点就不行了，就不用继续了,这里到不用继续了即包括该depth不用继续了，也包括该节点更大到child也不用继续了，该节点pop出来
    if (target - candidates[i] < 0) return

    path.push(candidates[i])
    DFS(candidates, target - candidates[i], i, path, res)

    path.pop()
  }
}

console.log(combinationSum([2, 3, 5], 8))
