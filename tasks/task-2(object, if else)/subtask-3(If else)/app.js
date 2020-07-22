console.log('↓-----1-----↓');
let var1 = 'hidden';

if (var1 == 'hidden') {
	var1 = 'visible'
} else {
	var1 = 'hidden'
}

console.log(var1)

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

let var2 = 5;

if (var2 == 0) {
	var2 = 1;
} else if (var2 < 0) {
	var2 = 'less then zero';
} else if (var2 > 0) {
	var2 += 10;
}

console.log(var2);

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

let car = {
			name: 'Lexus',
			age: 10,
			create: 2008,
			needRepair: false,
		};

if (car.age > 5) {
	console.log('Need Repair');
	car.needRepair = true;
} else {
	car.needRepair = false;
}

console.log(car);

console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

let item = {
	name: 'Intel core i7',
	price: '188$',
	discount: '15%'
   }

   if(!!item.discount) {
	   let price = parseFloat(item.price);
	   let discount = parseFloat(item.discount);
	   let priceWithDiscount = price - (price * `0.${discount}`);

	   item.priceWithDiscount = priceWithDiscount;
	   console.log(item);
   } else {
	   console.log(item.price);
   }

console.log('↑-----4-----↑');


console.log('↓-----5-----↓');

let product = {
	name: 'Яблоко',
	price: '10$',
   }

   let min = 10; // минимальная цена
   let max = 20; // максимальная цена
   let price = parseFloat(product.price);

   if (price >=  min && price <= max) {
	   console.log(product.name);
   } else {
	   console.log('товаров не найдено');
   }

console.log('↑-----5-----↑');
