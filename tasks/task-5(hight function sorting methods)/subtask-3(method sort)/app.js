console.log('↓-----1-----↓');

let arr1 = [ [14, 45], [1], ['a', 'c', 'd'] ];

let sort1 = arr1.sort(function(a, b) {
	return a.length - b.length;
});

console.log(sort1);

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

let arr2 = [
	{cpu: 'intel', info: {cores:2, сache: 3}},
	{cpu: 'intel', info: {cores:4, сache: 4}},
	{cpu: 'amd', info: {cores:1, сache: 1}},
	{cpu: 'intel', info: {cores:3, сache: 2}},
	{cpu: 'amd', info: {cores:4, сache: 2}}
   ];

let sort2 = arr2.sort(function(a, b) {
	return a.info.cores - b.info.cores;
});

console.log(sort2);

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

let products = [
	{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
	{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
	{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
	{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
   ];

function filterCollection(arr, from, to) {
	let newArr = [];
	let sortArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].price >= from && arr[i].price <= to) {
			newArr.push(arr[i])
		}
	}

	sortArr = newArr.sort(function(a, b) {
		return a.price - b.price;
	})

	return sortArr;
}

console.log(filterCollection(products, 15, 30));

console.log('↑-----3-----↑');