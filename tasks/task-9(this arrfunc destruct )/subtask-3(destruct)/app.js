console.log('↓-----1-----↓');

function func() {
	let [a, ...other] = arguments;
	return {
		first: a,
		other: other,
	}
}

console.log(func('a', 'b', 'c', 'd'))

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

const organisation = {
	name: 'Google',
	info: {
		employees: ['Vlad', 'Olga'],
		partners: ['Microsoft', 'Facebook', 'Xing']
	}
};

function getInfo(obj) {
	let { name = 'none', info: { partners: [partner1, partner2] } } = obj;

	return {
		name,
		partners: [partner1, partner2]
	};
}

console.log(getInfo(organisation));

console.log('↑-----2-----↑');