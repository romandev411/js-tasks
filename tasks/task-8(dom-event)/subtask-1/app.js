console.log('↓-----1-----↓');

const btnMsg = document.getElementById('btn-msg');

btnMsg.addEventListener('click', function() {
	alert(this.dataset.text);
});

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

btnMsg.addEventListener('mousemove', function() {
	this.classList.add('edit-bg');
});

btnMsg.addEventListener('mouseout', function() {
	this.classList.remove('edit-bg');
});

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

const tag = document.getElementById('tag');
const text = tag.textContent;

document.addEventListener('click', function(e) {
	tag.textContent = text + ' ' + e.target.tagName;
});

console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

const btnGenerate = document.getElementById('btn-generate');
const ul = document.getElementById('ul');

function countLi() {
	for (let i = 0; i < ul.children.length; i++) {

	}
}

function genereteItem() {
	let template = `<li>Item ${ ul.children.length + 1 }</li>`;

	ul.insertAdjacentHTML('beforeend', template);
}

btnGenerate.addEventListener('click', function(e) {
	genereteItem();
});

console.log('↑-----4-----↑');
