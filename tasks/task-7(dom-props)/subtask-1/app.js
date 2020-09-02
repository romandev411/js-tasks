console.log('↓-----1-----↓');

const textP = document.querySelector('p').textContent;
console.log(textP);

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

function elemInfo(elem) {
	return {
		type: elem.nodeType,
		name: elem.nodeName,
		children: elem.children.length,
	};
}

const el = document.querySelector('p');

console.log(elemInfo(el))

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

const textUl = document.querySelector('ul').querySelectorAll('a');

function textElem(elem) {
	let linkArr = [];

	for (let i = 0; i < elem.length; i++) {
		linkArr.push(elem[i].textContent)
	}

	return linkArr;
}

console.log(textElem(textUl));

console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

const pNodes = document.querySelector('p').childNodes;

for (let i = 0; i < pNodes.length; i++) {
	if (pNodes[i].nodeType === 3) {
		pNodes[i].textContent = '-text-';
	}
}

console.log('↑-----4-----↑');
