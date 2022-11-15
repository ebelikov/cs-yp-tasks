// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

function solution(node, idx) {
  let prevNode = null;
  let currentNode = node;

  if (idx === 0) {
    return node.next;
  }

  while (idx) {
    prevNode = currentNode;
    currentNode = currentNode.next;
    idx--;
  }

  if (prevNode) {
    prevNode.next = currentNode.next || null;
  }

  if (currentNode.next) {
    currentNode.next = null;
  }

  return node;
}

// function test() {
//     var node3 = new Node("node3");
//     var node2 = new Node("node2", node3);
//     var node1 = new Node("node1", node2);
//     var node0 = new Node("node0", node1);
//     var newHead = solution(node0, 1);
//     // result is node0 -> node2 -> node3
// }
