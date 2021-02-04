// 后续遍历 递归

const bt = require('./bt')

const postorder = (root) => {
  if (!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}

postorder(bt) // 4 5 2 6 7 3 1