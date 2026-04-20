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

// traversal tree, using recursion
// preorder root -> left -> right

const preArr = []
function preorder(root) {
  if (!root) return
  preArr.push(root.value)
  preorder(root.left)
  preorder(root.right)
}
preorder(root)
console.log(preArr);

const inorderArr = []
function inorder(root) {
  if (!root) return
  inorder(root.left)
  inorderArr.push(root.value)
  inorder(root.right)
}
inorder(root)
console.log(inorderArr);

const postArr = []
function postorder(root) {
  if (!root) return
  postorder(root.left)
  postorder(root.right)
  postArr.push(root.value)
}
postorder(root)
console.log(postArr);
