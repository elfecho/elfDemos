const bt = require('./bt');

// const preorder = (root) => {
//   if (!root) { return; }
//   console.log(root.val);
//   preorder(root.left);
//   preorder(root.right);
// }

// 非递归版 (使用堆栈的逻辑)
const preorder = (root) => {
  if (!root) { return; }
  const stack = [root];
  while(stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) stack.push(n.right); // 这个地方因为堆栈是后进先出，故将right提前
    if (n.left) stack.push(n.left);
  }
}

preorder(bt)
