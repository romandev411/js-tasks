console.log('↓-----1-----↓');

let a = 'none';

switch(a) {
	case 'block':
		console.log('block');
		break;
	case 'none':
		console.log('none');
		break;
	case 'inline':
		console.log('inline');
		break;
	default: console.log('other');
}

console.log('↑-----1-----↑');

console.log('↓-----2.1-----↓');

let vis = 'hidden' ? 'visible': 'hidden';
console.log(vis);

console.log('↑-----2.1-----↑');

console.log('↓-----2.2-----↓');

let num = 8;

let ternar = num == 0 ? 1 : num < 0 ? 'less then zero':  num *= 10;

console.log(ternar);

console.log('↑-----2.2-----↑');


console.log('↓-----2.3-----↓');

let car = {
	name: 'Lexus',
	age: 10,
	create: 2008,
	needRepair: false
   }

let ternar2 = car.age > 5 ? (car.needRepair = true, console.log('Need Repair')) : car.needRepair = false;

console.log('↑-----2.3-----↑');