const mainDiv = window.document.getElementById('main');

console.log(mainDiv)

class TreeNode {
	constructor(node, deep) {
		this.node = node;
		this.deep = deep;
	}
}

const maxDeep = (root) => {
	if (!root) {
		return 0;
	}

	let maxDeep = 1;


	const queue = [];
	queue.push(new TreeNode(root, 1));

	while (queue.length) {
		const { node, deep } = queue.shift();
		console.log(deep);
		if (!node.children.length) {
			maxDeep = Math.max(maxDeep, deep);
			continue;
		}


		for (let i = 0; i < node.children.length; i++) {
			queue.push(new TreeNode(node.children[i], deep + 1))
		}
	}

	return maxDeep;
}

const deep = maxDeep(mainDiv);
const outputDiv = window.document.getElementById('output');
outputDiv.innerText = deep;