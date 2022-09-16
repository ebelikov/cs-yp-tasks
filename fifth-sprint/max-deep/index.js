// // Comment it before submitting
// // class CNode {
// //   constructor(value, left = null, right = null) {
// //     this.value = value;
// //     this.left = left;
// //     this.right = right;
// //   }
// // }

// function solution(root, deep = 0) {
//   deep++;
//   let leftMaxDeep = deep;
//   let rightMaxDeep = deep;

//   if (root.left) {
//     leftMaxDeep = solution(root.left, deep);
//   }

//   if (root.right) {
//     rightMaxDeep = solution(root.right, deep);
//   }

//   return Math.max(deep, leftMaxDeep, rightMaxDeep);
// }

// // function test() {
// //   var node1 = new CNode(1, null, null);
// //   var node2 = new CNode(4, null, null);
// //   var node3 = new CNode(3, node1, node2);
// //   var node4 = new CNode(8, null, null);
// //   var node5 = new CNode(5, node3, node4);
// //   console.assert(solution(node5) === 3);
// // }

// // test();

const findMaxDeep = (node, deep = 0) => {
  if (!node) {
    return deep;
  }

  deep++;

  if (node.children.length === 0) {
    return deep;
  }

  const arr = [];

  for (let i = 0; i < node.children.length; i++) {
    arr.push(findMaxDeep(node.children[i], deep));
  }

  return Math.max(...arr);
};
