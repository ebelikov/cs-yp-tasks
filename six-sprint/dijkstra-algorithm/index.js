const readline = require("readline");
const io_interface = readline.createInterface({ input: process.stdin });
let lineNumber = 0;
const output = (value) => {
	process.stdout.write(value);
};
let edges = [];
let edgesSize = null;
let verticesSize = null;
const createVertices = (size) => {
	const list = Array(size);

	for (const { from, to, weight } of edges) {
		if (Array.isArray(list[from])) {
			list[from].push({ vertex: to, weight });
		} else {
			list[from] = [{ vertex: to, weight }];
		}

		if (Array.isArray(list[to])) {
			list[to].push({ vertex: from, weight });
		} else {
			list[to] = [{ vertex: from, weight }]
		}
	}

	return list;
}

const createLists = (size, start) => {
	const dist = Array(size).fill(Number.MAX_SAFE_INTEGER);
	dist[start] = 0;
	const previous = Array(size).fill(null);
	const visited = Array(size).fill(false);

	return { dist, previous, visited }
}

const getMinDistNotVisitedVertex = ({ list, visited, dist }) => {
	let min = Number.MAX_SAFE_INTEGER;
	let minVertex = null;

	for (let idx = 0; idx < list.length; idx++) {
		if (!visited[idx] && dist[idx] < min) {
			min = dist[idx];
			minVertex = idx;
		}
	}

	return minVertex;
}

const relax = ({ u, v, w, dist, previous }) => {
	if (dist[v] > dist[u] + w) {
		dist[v] = dist[u] + w;
		previous[v] = u
	}
}

const dijkstra = ({ size, list, start }) => {
	const { dist, previous, visited } = createLists(size, start);

	let u = getMinDistNotVisitedVertex({ dist, list, visited })

	while (u !== null) {
		visited[u] = true;

		if (Array.isArray(list[u])) {
			for (const { vertex: v, weight: w } of list[u]) {
				relax({ u, v, w, dist, previous });
			}
		}

		u = getMinDistNotVisitedVertex({ dist, list, visited })
	}

	return dist;

}

const createMatrix = (size) => {
	const matrix = Array(size);

	for (let i = 0; i < size; i++) {
		matrix[i] = Array(size);
	}

	return matrix;
}


const main = () => {
	const size = verticesSize;
	const list = createVertices(size);
	const matrix = createMatrix(size).map((el, idx) => {
		return dijkstra({ list, size, start: idx }).join(' ')
	});

	output(matrix.join('\n').replace(/9007199254740991/g, '-1'))
};


// prepare

const prepareInput = (line) => {
	return line.trim().split(' ').map(Number);
}

class Edge {
	constructor({ from, to, weight }) {
		this.from = from - 1;
		this.to = to - 1;
		this.weight = weight;
	}
}

io_interface.on("line", function (line) {
	if (lineNumber === 0) {
		const [v, e] = prepareInput(line);
		verticesSize = v;
		edgesSize = e;
	} else if (lineNumber <= edgesSize) {
		const [from, to, weight] = prepareInput(line);
		edges.push(new Edge({ from, to, weight }))
	}

	lineNumber++;
});

io_interface.on("close", function () {
	main();
});