console.log('↓-----1-----↓');

const rectangle = {
	width: 10,
	height: 20,

	getSquare() {
		console.log(this.width * this.height);
		return this.width * this.height;
	}
};

rectangle.getSquare();

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

const price = {
	price: 10,
	discount: '15%',

	getPrice() {
		return this.price;
	},
	getPriceWithDiscount() {
		let discount = parseInt(this.discount) / 100;
		let priceSum = this.price * discount;

		console.log(this.getPrice() - priceSum);
		return this.getPrice() - priceSum;
	},
};

price.getPriceWithDiscount();

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

let isHeight = {
	height: 0,

	addHeight() {
		console.log(this.height)
		this.height++;
	},
};

isHeight.addHeight();

console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

const numerator = {
	value: 1,

	double() {
		this.value = this.value * 2;
		return this;
	},
	plusOne() {
		this.value = this.value + 1;
		return this;
	},
	minusOne() {
		this.value = this.value - 1;
		return this;
	},
}


numerator.double().plusOne().plusOne().minusOne();

console.log(numerator.value);

console.log('↑-----4-----↑');
