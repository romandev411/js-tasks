console.log('↓-----1-----↓');

function isEven(arr) {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		newArr.push({digit: arr[i], odd: !!(arr[i] % 2)})
	}

	return newArr;
}

console.log(isEven([1, 2, 3]))

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

function isNull(arr) {
	let res = false;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			res = false;
			break;
		} else {
			res = true;
		}
	}

	return res;
}

console.log(isNull([12, 4, 50, 1, 1, 18, 40]));

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

function lengthStr(arr) {
	let res = false;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > 3) {
			res = true;
			break;
		} else {
			res = false;
		}
	}

	return res;
}

console.log(lengthStr(['yes', 'hello', 'no', 'easycode', 'what']));

console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

let words = [
	{char:"a",index:12},
	{char:"w",index:8},
	{char:"Y",index:10},
	{char:"p",index:3},
	{char:"p",index:2},
	{char:"N",index:6},
	{char:" ",index:5},
	{char:"y",index:4},
	{char:"r",index:13},
	{char:"H",index:0},
	{char:"e",index:11},
	{char:"a",index:1},
	{char:" ",index:9},
	{char:"!",index:14},
	{char:"e",index:7}
	];

function charWord(arr) {
	let newArr = [];
	let str = '';

	newArr = arr.sort(function(a, b) {
		return a.index - b.index;
	});

	for (let i = 0; i < newArr.length; i++) {
		str = str + newArr[i].char;
	}

	return str;
}

console.log(charWord(words));

console.log('↑-----4-----↑');
