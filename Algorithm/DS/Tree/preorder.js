// 先序遍历 
const bt = require('./bt')

// 递归
const preorder = (root) => {
  if (!root) return
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}

preorder(bt) // 1 2 4 5 3 6 7

// 非递归
const preorder1 = (root) => {
  if (!root) return
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    console.log(n.val)
    // 注意先入右节点
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
}
preorder1(bt) // 1 2 4 5 3 6 7