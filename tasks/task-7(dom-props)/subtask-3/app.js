console.log('↓-----1-----↓');

(function() {
	const list = document.querySelector('ul');
	let elem;
	elemLen = list.children.length;

	for (let i = 1; i < 4; i++) {
		elem = document.createElement('li');
		elem.classList.add('new-item');
		elem.textContent = ('item' + (i + elemLen));
		console.log(elem);

		list.appendChild(elem);
	}
})();

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

(function() {
	const listA = document.querySelector('ul').querySelectorAll('a');
	let elem;

	for (let i = 1; i < listA.length; i++) {
		elem = document.createElement('strong');
		listA[i].appendChild(elem);
	}

	console.log(listA);
})();

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

(function() {
	let elem = document.createElement('img');
	elem.setAttribute('src', 'https://lh3.googleusercontent.com/proxy/YFDYUwL5RPr6S-o46Dw2m6d3HgopZUiGuXdid8W0jrl4oHrtY8DQPz72BfgiRztWR4R2UCTyf_TCfypKdTwyb-yCbZtIYE59IzxJZq9xCypL');
	elem.setAttribute('alt', 'alt');
	elem.setAttribute('width', '100');
	document.body.insertBefore(elem, document.body.firstChild);
	console.log(elem)
})();

console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

(function() {
	let elem = document.querySelector('mark');
	elem.classList.add('green');

	elem.textContent = (elem.textContent + ' green');
	console.log(elem);
})();

console.log('↑-----4-----↑');

console.log('↓-----5-----↓');

(function() {
	const list = document.querySelector('ul');
	const li = list.querySelectorAll('li');
	let arr = Array.prototype.slice.call(li);

	console.log(arr[0].textContent);

	arr.sort(function(a, b) {
		return b.textContent[b.textContent.length -1] - a.textContent[b.textContent.length -1];
	});

	for (let i = 0; i < arr.length; i++) {
		list.appendChild(arr[i])
	}

	console.log(arr);
})();

console.log('↑-----5-----↑');
