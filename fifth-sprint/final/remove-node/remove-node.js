/**
 * https://contest.yandex.ru/contest/24810/run-report/70429059/
 *
 * -- ПРИНЦИП РАБОТЫ -
 * Функция удаления ноды, проверяет множество частных случаев:
 * 1. Есть ли дерево
 * 2. Существует ли искомый элемент в дереве
 * 3. Удаление корневого элемента, когда он единственный элемент в дереве
 * 4. Удаление корневого элемента, когда корень имеет только 1 поддерево
 * 5. Удаление элемента, у которого нет детей
 * 6. Базовый случай
 *
 * В самом алгоритме нет ничего хитрого.
 * Сложность заключается в большом количестве исходов
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * Обработаные все крайние и базовый случаи удаления вершины из BST
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * O(h) - худший случай
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * O(h) - стек вызовов
 *
 * -- PS --
 * Решал задачу 30-60 минут, рефакторил несколько часов
 * пытался найти эталонное решение, но что находил мне нравилось меньше
 * Если у вас есть эталонное решение, с удовольствием бы взглянул на него
 */

function getSide(condition) {
  return condition ? 'left' : 'right';
}

function getRemoveOptions(node, key) {
  // удаляемый элемент - корневой
  if (node.value === key) {
    return { isRootNeedDelete: true, removedNode: node };
  }

  if (!node || (!node.left && !node.right)) return { isNotFinded: true };

  const side = getSide(key < node.value);

  if (node[side] && node[side].value === key) {
    return {
      parentOfRemovedNode: node,
      removedNode: node[side],
      removedSide: side,
      isRootNeedDelete: false,
    };
  }

  if (node[side]) return getRemoveOptions(node[side], key);

  return { isNotFinded: true };
}

// функция ищет самую правую/левую вершину
function findDeppestNode(node, side) {
  if (node[side] && node[side][side]) {
    return findDeppestNode(node[side], side);
  }

  return { parentDeppestNode: node, deppestNode: node[side] };
}

function removeBaseCase(
  { removedNode, parentOfRemovedNode, removedSide, root, isRootNeedDelete },
  isLeftSide
) {
  const mainSide = getSide(isLeftSide);
  const secondSide = getSide(!isLeftSide);

  if (!removedNode[mainSide][secondSide]) {
    parentOfRemovedNode[removedSide] = removedNode[mainSide];
    removedNode[mainSide][secondSide] = removedNode[secondSide];
    return root;
  }

  const { deppestNode, parentDeppestNode } = findDeppestNode(
    removedNode[mainSide],
    secondSide
  );

  parentDeppestNode[secondSide] = deppestNode[mainSide];
  deppestNode.left = removedNode.left;
  deppestNode.right = removedNode.right;

  if (isRootNeedDelete) {
    return deppestNode;
  }

  parentOfRemovedNode[removedSide] = deppestNode;
  return root;
}

function remove(root, key) {
  if (!root) return null;

  const {
    isRootNeedDelete,
    isNotFinded,
    parentOfRemovedNode,
    removedNode,
    removedSide,
  } = getRemoveOptions(root, key);

  if (isNotFinded) return root;

  // кейс удаления корневого, единственного элемента
  if (isRootNeedDelete && !removedNode.left && !removedNode.right) {
    return null;
  }

  // кейс удаления корневого элемента, у которого есть только 1 поддерево
  if (isRootNeedDelete && (!removedNode.left || !removedNode.right)) {
    if (!removedNode.left) return root.right;

    if (!removedNode.right) return root.left;
  }

  // кейс удаления вершины, у которой нет детей
  if (!removedNode.left && !removedNode.right) {
    parentOfRemovedNode[removedSide] = null;
    return root;
  }

  // частный случай
  if (isRootNeedDelete && removedNode.left && !removedNode.left.right) {
    removedNode.left.right = root.right;
    return removedNode.left;
  }

  return removeBaseCase(
    {
      removedNode,
      parentOfRemovedNode,
      removedSide,
      root,
      isRootNeedDelete,
    },
    !!removedNode.left
  );
}
