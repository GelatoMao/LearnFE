const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: []
        }
      ],
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        },
        {
          val: 'g',
          children: []
        }
      ]
    }
  ]
}

const bfs = (root) => {
  const q = [root]
  while (q.length) {
    // 出队头元素
    const n = q.shift()
    console.log(n.val)
    // 将队头元素的子元素依次入队
    n.children.forEach(child => {
      q.push(child)
    })
  }
}
bfs(tree)  // a b d e c f g