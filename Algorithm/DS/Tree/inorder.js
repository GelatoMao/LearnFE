// 中序遍历
const bt = require('./bt')

// 递归 递归操作就类似入栈操作
const inorder = (root) => {
  if (!root) return
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}

inorder(bt)  // 4 2 5 1 6 3 7

const inorder1 = (root) => {
  if (!root) return
  const stack = []
  // 将左子树入栈
  let p = root
  while (p) {
    stack.push(p)
    p = p.left
  }
  const n = stack.pop()
  console.log(n.val)
  p = n.right
  while (p) {
    stack.push(p)
    p = p.right
  }
}
inorder1(bt)