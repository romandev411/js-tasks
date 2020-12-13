console.log('↓-----1-----↓');

function minus(number = 0) {
	let numb = number;

	return function(minusNumb = 0) {
		return numb - minusNumb;
	}
}

console.log(minus(5)(3))
console.log(minus(1)(3))
console.log(minus()())
console.log(minus()(6))

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

function multiplyMaker(number) {
	return function(numb) {
		return number = number * numb;
	}
}

const multiply = multiplyMaker(2);

console.log(multiply(2))
console.log(multiply(1))
console.log(multiply(3))

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

function getString() {
	let _string = '';

	function addString(str) {
		_string = str;
	}

	function showString() {
		return _string;
	}

	function lengthString() {
		return _string.length;
	}

	function reverseString() {
		return _string.split('').reverse().join('');
	}

	return {
		addString: addString,
		showString: showString,
		lengthString: lengthString,
		reverseString: reverseString,
	};
}

const strModule = getString();

console.log(strModule.addString('abcdefg1234'))
console.log(strModule.showString())
console.log(strModule.lengthString())
console.log(strModule.reverseString())


console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

function calc() {
	let _numb = 0;

	function setNumb(val = 0) {
		this.numb = val;
		return this;
	}

	function plusNumb(val) {
		this.numb += val;
		return this;
	}

	function multiplyNumb(val) {
		this.numb *= val;
		return this;
	}

	function showNumb() {
		console.log(this.numb.toFixed(2));
		return this;
	}

	return {
		setNumb: setNumb,
		plusNumb: plusNumb,
		multiplyNumb: multiplyNumb,
		showNumb: showNumb,
		numb: _numb,
	}
}

const calcModule = calc();

calcModule.setNumb(10).plusNumb(11).multiplyNumb(3).showNumb();

console.log('↑-----4-----↑');
