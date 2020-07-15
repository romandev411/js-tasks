console.log('↓-----1-----↓');

function firstFunc(arr, func) {
	let str = '';

	arr.forEach((item) => {
		str = str + func(item)
	});

	return 'New value: ' + str.trim();
}

function handler1(item) {
	return item[0].toUpperCase() + item.slice(1, item.lenght);
}

function handler2(item) {
	return item + 0 + ' ';
}

function handler3(item) {
	return item.name + ' is ' + item.age + ', ';
}

function handler4(item) {
	return item.split('').reverse().join('') + ' ';
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));
console.log(firstFunc([10, 20, 30], handler2));
console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));
console.log(firstFunc(['abc', '123'], handler4));

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

function funcEvery(arr, func) {
	let status = false;

	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			status = true;
		} else {
			status = false;
		}
	}

	return status;
}

function everyHandler(element) {
	return element >= 10;
}

console.log(funcEvery(['1', '2', '3'], everyHandler));

console.log('↑-----2-----↑');