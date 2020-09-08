console.log('↓-----1-----↓');

let ul = document.querySelector('ul');
ul.classList.add('list');
console.log(ul);

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

function searchNextTag(el, nextEl) {
	for (;true;) {
		nextEl = nextEl.nextElementSibling;

		if (!nextEl || nextEl.tagName == el.toUpperCase()) {
			break;
		}
	}
	nextEl.id = 'link';

	return nextEl;
}

console.log(searchNextTag('a', ul));

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

function evenClass(el) {
	for (let i = 0; i < el.length; i++) {
		if (i % 2) {
			el[i].classList.add('item');
		}
	}
}

evenClass(document.querySelectorAll('li'));

console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

function linkClass(el) {
	for (let i = 0; i < el.length; i++) {
		el[i].classList.add('custom-link');
	}
}

linkClass(document.querySelectorAll('a'));

console.log('↑-----4-----↑');