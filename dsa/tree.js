let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O']

function Node(value) {
  this.value = value
  this.left = null
  this.right = null
}

function buildTree(i) {
  if (i >= arr.length) return null

  let node = new Node(arr[i])
  node.left = buildTree(2 * i + 1)
  node.right = buildTree(2 * i + 2)

  return node
}

let root = buildTree(0)
console.dir(root, { depth: null })
