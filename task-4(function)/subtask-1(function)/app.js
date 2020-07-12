console.log('↓-----1-----↓');

function multiply() {
	if (arguments.length === 0) {return null}
	let num = 1;
	for (let i = 0; i < arguments.length; i++) {
		num = num * arguments[i];
	}
	return num;
}

console.log(multiply(1,2,3))
console.log(multiply())

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

function reverse(string) {
	str = '';
	for (let i = string.length; i >  0 ; i--) {
		str = str + string[i-1];
	}
	return str;
}

console.log(reverse('123'))


console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

function char(string) {
	let str = '';

	for (let i = 0; i < string.length; i++) {
		str = str + ' ' + string[i].charCodeAt(0);
	}

	return str;
}

console.log(char('123'))


console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

function randomNumber(num) {
	let msg = '';
	let number = Math.random().toFixed(1) * 10;

	if (num > 10 || num < 0) {
		return msg = 'некоректное значение';
	}

	if (number === num) {
		msg = 'победа';
	} else {
		msg = `Вы не угадали, ваше число ${num}, а выпало число ${number}`;
	}

	return msg;
}

console.log(randomNumber(3));

console.log('↑-----4-----↑');

console.log('↓-----5-----↓');

function numArr(num) {
	let arr = [];

	if(typeof(num) !== 'number' || num <= 0) {
		return arr = 'некоректное значение'
	}

	for (let i = 1; i < num + 1; i++) {
		arr.push(i);
	}
	return arr;
}

console.log(numArr(11));

console.log('↑-----5-----↑');

console.log('↓-----6-----↓');

function doubleArray(arr) {
	let newArr = arr.slice();

	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i])
	}
	return newArr;
}

let func = doubleArray([1,2,3]);
console.log(func);

console.log('↑-----6-----↑');

console.log('↓-----7-----↓');

function changeCollection() {
	let newArr = [];

	for (let i = 0; i < arguments.length; i++) {
		arguments[i].splice(0, 1);
		newArr.push(arguments[i])
	}
	return newArr;
}

let func2 = changeCollection([1,2,3], [5, 4, 3]);
console.log(func2);

console.log('↑-----7-----↑');


console.log('↓-----8-----↓');

let users = [
	{name: 'Denis', age: '111', gender: 'male'},
	{name: 'Ivan', age: '222', gender: 'famale'},
	{name: 'Ivan', age: '333', gender: 'male'},
   ]

function funcGetUsers(arr, key, val) {
	newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][key] === val) {
			newArr.push(arr[i])
		}
	}

	return newArr;
}

let func3 = funcGetUsers(users, 'gender', 'male');
console.log(func3);


console.log('↑-----8-----↑');
