// Comment it before submitting
// class CNode {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

function solution(root) {
  function compare(root1, root2) {
    if (!root1 && !root2) {
      return true;
    }

    if (!root1 || !root2 || root1.value !== root2.value) {
      return false;
    }

    return compare(root1.left, root2.right) && compare(root1.right, root2.left);
  }

  return compare(root.left, root.right);
}

// function solution(root) {
//   if (!root.left && !root.right) {
//     return true;
//   }

//   if (!root.left || !root.right) {
//     return false;
//   }

//   let left = [];
//   let right = [];

//   const lmr = (node, acc) => {
//     if (node.left) {
//       lmr(node.left, acc);
//     }

//     if (node) {
//       acc.push(node.value);
//     }

//     if (node.right) {
//       lmr(node.right, acc);
//     }
//   };

//   const rmr = (node, acc) => {
//     if (node.right) {
//       rmr(node.right, acc);
//     }

//     if (node) {
//       acc.push(node.value);
//     }

//     if (node.left) {
//       rmr(node.left, acc);
//     }
//   };

//   lmr(root.left, left);
//   rmr(root.right, right);

//   console.log(left);
//   console.log(right);

//   return left.join("") === right.join("");
// }

// function test() {
//   var node1 = new CNode(3, null, null);
//   var node2 = new CNode(4, null, null);
//   var node3 = new CNode(4, null, null);
//   var node4 = new CNode(3, null, null);
//   var node5 = new CNode(2, node1, node2);
//   var node6 = new CNode(2, node3, node4);
//   var node7 = new CNode(1, node5, node6);
//   console.log(solution(node7));
// }

// test();
