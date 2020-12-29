console.log('↓-----1-----↓');

class Component {
	constructor(tagName) {
		this.tagName = tagName || 'div';
		this.node = document.createElement(tagName);
	}
}

const comp = new Component('span');

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

class Component2 {
	constructor(tagName) {
		this.tagName = tagName || 'div';
		this.node = document.createElement(tagName);
	}

	setText = function(text) {
		this.node.textContent = text;
	};
}

const comp2 = new Component2('span');

console.log(comp2.setText('text test'))
console.log(comp2.node)

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

class Calc {
	constructor(val) {
		this._number = val;
	}

	get number() {
		return this._number;
	}

	set number(val) {
		this._number = val;
	}

	plus(plusVal) {
		this._number += plusVal;
	}
}

const calcul = new Calc(2);

console.log(calcul.plus(3));
console.log(calcul.number);


console.log('↑-----3-----↑');