console.log('↓-----1-----↓');

function InfoCar(car, year) {
	this.isCar = () => car[0].toUpperCase() + car.slice(1);

	this.yearCar = () => new Date().getFullYear() - year;
}

const lexus = new InfoCar('lexus', '10');

console.log(lexus.isCar());
console.log(lexus.yearCar());

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

function Coder(string) {
	let str = string;

	this.showStr = () => str;

	this.strReverse = () => str.split('').reverse().join('');
}

const test1 = new Coder('test1');

console.log(test1.showStr())
console.log(test1.strReverse())

console.log('↑-----2-----↑');