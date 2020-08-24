console.log('↓-----1-----↓');

function isParent(parent, child) {
	let status = false;

	for (let i = 0; i < 10; i++) {
		child = child.parentElement;

		if (!child) {
			break;
		}

		if (child === parent) {
			status = true;
			break;
		}
	}

	return status;
}

const func = isParent(document.body.children[0], document.querySelector('article'));
console.log(func);

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

const ignore = document.querySelector('ul')
const elem = 'a';

function searchTag(ignorPArent, elem) {
	const arrTags = [];
	const tags = document.querySelectorAll(elem)

	for(let i = 0; i < tags.length; i++) {

		if (!isParent(ignorPArent, tags[i])) {
			arrTags.push(tags[i]);
			console.log(tags[i])
		}
	}

	return arrTags;
};

const func2 = searchTag(ignore, elem);
console.log(func2);

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

const ulItem = document.querySelector('ul');
console.log(ulItem.previousElementSibling);
console.log(ulItem.nextElementSibling);

console.log('↑-----3-----↑');