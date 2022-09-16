// // Comment it before submitting
// class CNode {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

function solution(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }

  if (!root1 || !root2 || root1.value !== root2.value) {
    return false;
  }

  return solution(root1.left, root2.left) && solution(root1.right, root2.right);
}
// function solution(root1, root2) {
//   const getPath = (node, acc = "") => {
//     if (!node.left && !node.right) {
//       acc += node.value;
//       return acc;
//     }

//     acc = node.left ? getPath(node.left, acc) : acc + "null";
//     acc += node.value;
//     acc = node.right ? getPath(node.right, acc) : acc + "null";

//     return acc;
//   };

//   return getPath(root1) === getPath(root2);
// }

// function test() {
//   var node1 = new CNode(1, null, null);
//   var node2 = new CNode(2, null, null);
//   var node3 = new CNode(3, node1, node2);

//   var node4 = new CNode(1, null, null);
//   var node5 = new CNode(2, null, null);
//   var node6 = new CNode(3, node4, node5);

//   console.assert(solution(node3, node6));
// }

// test();
