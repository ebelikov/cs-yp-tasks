this.scope = 'global';

const obj = {
	scope: 'obj',
}

function zoo() {
	const foo = () => {
		console.log(this);
	}

	foo();
}

zoo.call(obj);
