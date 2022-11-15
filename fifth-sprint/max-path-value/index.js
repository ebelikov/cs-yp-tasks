// Comment it before submitting
// class CNode {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

function solution(root) {
  let max = null;

  function run(root) {
    let leftValue = null;
    let rightValue = null;

    if (root.left) {
      leftValue = run(root.left);
    }

    if (root.right) {
      rightValue = run(root.right);
    }

    if (leftValue === null && rightValue === null) {
      max = Math.max(...[max, root.value].filter((item) => item !== null));
      return root.value;
    }

    let allSum = null;
    let leftSum = null;
    let rightSum = null;

    if (leftValue !== null && rightValue !== null) {
      allSum = root.value + leftValue + rightValue;
    }

    if (leftValue !== null) {
      leftSum = root.value + leftValue;
    }

    if (rightValue !== null) {
      rightSum = root.value + rightValue;
    }

    max = Math.max(
      ...[
        max,
        allSum,
        leftSum,
        rightSum,
        leftValue,
        rightValue,
        root.value,
      ].filter((item) => item !== null)
    );

    return Math.max(
      ...[root.value, leftSum, rightSum].filter((item) => item !== null)
    );
  }

  run(root);

  return max;
}

// function test() {
//   var node1 = new CNode(5, null, null);
//   var node2 = new CNode(1, null, null);
//   var node3 = new CNode(-3, node2, node1);
//   var node4 = new CNode(2, null, null);
//   var node5 = new CNode(2, node4, node3);
//   console.assert(solution(node5) === 6);
// }

// test();
