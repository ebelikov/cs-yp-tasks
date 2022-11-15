/**
 * -- ПРИНЦИП РАБОТЫ -
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 *
 */

const readline = require("readline");
const io_interface = readline.createInterface({ input: process.stdin });
let verticesLength = null;
let edges = [];
let edgesLength = null;
let lineNumber = 0;

const output = (value) => {
	process.stdout.write(value);
};

const fillVerticesList = (arr, idx, value) => {
	if (Array.isArray(arr[idx])) {
		arr[idx].push(value)
	} else {
		arr[idx] = [value];
	}
}

const createVerticesList = (edges, size) => {
	const vertices = Array(size);
	vertices[0] = -1;

	for (const { from, to } of edges) {
		fillVerticesList(vertices, from, to);
		fillVerticesList(vertices, to, from);
	}

	return vertices;
}

const createBaseLists = (size, edges) => {
	const colors = Array(size).fill(-1);
	colors[0] = null
	const vertices = createVerticesList(edges, size);

	return { colors, vertices }
}

const DFS = ({ colors, vertices, startIdx, color }) => {
	const stack = [];
	stack.push(startIdx);


	while (stack.length) {
		const curIdx = stack.pop();

		if (colors[curIdx] === -1) {
			colors[curIdx] = 0;
			stack.push(curIdx);

			if (!Array.isArray(vertices[curIdx])) {
				continue;
			}

			for (let idx of vertices[curIdx]) {
				if (colors[idx] === -1) {
					stack.push(idx);
				}
			}
		} else {
			colors[curIdx] = color;
		}
	}

}

const main = () => {
	const size = verticesLength + 1;
	const { colors, vertices } = createBaseLists(size, edges)

	let color = 1;

	for (let i = 1; i < vertices.length; i++) {
		if (colors[i] === -1) {
			DFS({ colors, vertices, startIdx: i, color })
			color++;
		}
	}

	const map = new Map();

	for (let i = 1; i < colors.length; i++) {
		if (map.has(colors[i])) {
			map.get(colors[i]).push(i);
		} else {
			map.set(colors[i], [i])
		}
	}

	const res = map.size + '\n' + Array.from(map.values())
		.map(arr => arr.join(' '))
		.join('\n')

	output(res);
};

const prepareInput = (line) => {
	return line
		.trim()
		.split(" ")
		.map((n) => Number(n));
};

io_interface.on("line", function (line) {
	if (lineNumber === 0) {
		const [v, e] = prepareInput(line);

		edgesLength = e;
		verticesLength = v;
	} else if (lineNumber <= edgesLength) {
		const [from, to] = prepareInput(line);

		edges.push({ from, to });
	}

	lineNumber++;
});

io_interface.on("close", function () {
	main();
});