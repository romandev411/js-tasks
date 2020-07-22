console.log('↓-----1-----↓');

let str = 'i am in the easycode';
let newStr = str[0].toUpperCase();

for (let i = 0; i < str.length - 1; i++ ) {
	if (str[i] == ' ') {
		newStr = newStr + str[i+1].toUpperCase();
	} else {
		newStr = newStr + str[i+1];
	}
}

console.log(newStr);

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

let str2 = 'tseb eht ma i';
let newStr2 = '';

for (let i = str2.length; i > 0; i-- ) {
	newStr2 = newStr2 + str2[i - 1];
}

console.log(newStr2);

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

let num = 4;
let newNumStr = num+'';
let newNum = num;

for (let i = num-1; i > 0; i-- ) {
	newNumStr = newNumStr + ' * ' + i;
	newNum = newNum * i;
}

console.log(newNumStr);
console.log(newNum);

console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

let str3 = 'JavaScript is a pretty good language';
let newStr3 = str3[0].toUpperCase();

for (let i = 1; i < str3.length; i++ ) {
	if (str3[i] == ' ') {
		newStr3 = newStr3 + str3[i+1].toUpperCase();

	} else {
		newStr3 = newStr3 + str3[i];
	}
}
console.log(newStr3);

console.log('↑-----4-----↑');

console.log('↓-----5-----↓');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let newArr = [];

for (item of arr) {
	if (item % 2) {
		newArr.push(item);
	}
}
console.log(newArr);

console.log('↑-----5-----↑');

console.log('↓-----6-----↓');

let list = {
	name: 'denis',
	work: 'easycode',
	age: 29,
}

for (item in list) {
	if(typeof(list[item]) == 'string') {
		list[item] = list[item].toUpperCase();
	}
}
console.log(list);

console.log('↑-----6-----↑');
