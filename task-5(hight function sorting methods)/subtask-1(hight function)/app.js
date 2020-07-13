console.log('↓-----1-----↓');

function firstFunc(arr, func) {
	return 'New value: ' + func(arr);
}

function handler1(arr) {
	let str = '';

	for(let i = 0; i < arr.length; i++) {
		str = str + arr[i][0].toUpperCase() + arr[i].slice(1,arr[i].lenght);
	}

	return str;
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1))

console.log('↑-----1-----↑');

