console.log('↓-----1-----↓');

function promiseCreator(time, text) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(text)
		}, time)
	});
}

const prom = promiseCreator(500, 'Ok!');

prom.then(console.log);

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

const _data = '';

class Prom {
	constructor() {
		this.promise = new Promise((res, rej) => {
			this.resolve = res;
			this.reject = rej;
		});
	}
}

const inst = new Prom();

inst.promise.then((data) => console.log(data));

setTimeout(() => inst.resolve('test'), 5000)

console.log('↑-----2-----↑');