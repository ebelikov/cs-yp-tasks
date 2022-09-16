// Comment it before submitting
// class CNode {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

function solution(root, min = Number.MAX_SAFE_INTEGER) {
  let isLeftSearchable = true;
  let isRightSearchable = true;

  if (root.left) {
    if (root.value <= root.left.value) {
      return false;
    }
    isLeftSearchable = solution(root.left, Math.min(min, root.value));
  }

  if (root.right) {
    if (root.value >= root.right.value) {
      return false;
    }
    isRightSearchable = solution(root.right, Math.min(min, root.value));
  }

  return isLeftSearchable && isRightSearchable;
}

// function test() {
//   var node1 = new CNode(1, null, null);
//   var node2 = new CNode(4, null, null);
//   var node3 = new CNode(3, node1, node2);
//   var node4 = new CNode(8, null, null);
//   var node5 = new CNode(5, node3, node4);

//   console.log(solution(node5));

//   node2.value = 5;
//   console.log(solution(node5));

//   node2.value = 4;
//   node4.value = 5;
//   console.log(solution(node5));
// }

// test();
