console.log('↓-----1-----↓');

const product = {
	count: 12,
	price: 2,

	sum() {
		console.log(this.count * this.price);
	},
}

product.sum();

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

const pieces = {
	count: 22,
	price: 2,
}

product.sum.call(pieces);

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

let sizes = {
	width: 5,
	height: 10,
},

getSquare = function () {
	return this.width * this.height;
};

console.log(getSquare.call(sizes));

console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

let element = {
	height: 25,
	getHeight: function () {return this.height;}
   };

   let getElementHeight = element.getHeight.bind(element);

   console.log( getElementHeight());

console.log('↑-----4-----↑');