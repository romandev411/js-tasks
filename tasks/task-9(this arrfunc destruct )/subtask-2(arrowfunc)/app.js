console.log('↓-----1-----↓');

let sum = (...arguments) => {
	const params = Array.prototype.slice.call(arguments);

	if (!params.length) return 0;

	return params.reduce((prev, next) => prev + next);
   }

   console.log(sum(1, 2, 3, 4)); // 10
   console.log(sum()); // 0

console.log('↑-----1-----↑');
