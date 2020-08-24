console.log('↓-----1-----↓');

let elem1 = document.head;
console.log(elem1)

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

let elem2 = document.body;
console.log(elem2)

console.log('↑-----2-----↑');


console.log('↓-----3-----↓');

for (let i = 0; i < elem2.children.length; i++) {
	console.log(elem2.children[i]);
}

console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

let elem3 = document.body.children[0];
let elem4 = document.body.children;
console.log(elem3);
console.log(elem4);

const arrElem = [];

for (let i = 1; i < elem4.length -1; i++) {
	arrElem.push(elem4[i])
}

console.log(arrElem);

console.log('↑-----4-----↑');