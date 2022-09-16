// Comment it before submitting
class CNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function solution(root) {
  const findMaxLight = (root, maxLight = -Number.MAX_SAFE_INTEGER) => {
    if (!root) {
      return maxLight;
    }

    const leftValue = findMaxLight(root.left, Math.max(maxLight, root.value));

    const rightValue = findMaxLight(
      root.right,
      Math.max(maxLight, root.value, leftValue)
    );

    return Math.max(leftValue, rightValue);
  };

  return findMaxLight(root);
}

function test() {
  var node1 = new CNode(1);
  var node2 = new CNode(-5);
  var node3 = new CNode(3);
  node3.left = node1;
  node3.right = node2;
  var node4 = new CNode(2);
  node4.left = node3;
  console.assert(solution(node4) === 3);
}

// test();
