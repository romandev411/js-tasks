console.log('↓-----1-----↓');

const menu = document.querySelector('.menu');
const itemClass = 'dropdown-item';
const elSpan = document.querySelector('span');
const liItem = document.querySelector('.'+itemClass);

menu.addEventListener('click', function(e) {
	const el = isClosest(e.target, itemClass);

	console.log(el)
	if(el && el.classList.contains(itemClass)) {
		el.querySelector('.dropdown-menu').classList.toggle('d-none');

		let arr = isSibling(el);
		for (let i = 0; i < arr.length; i++) {
			arr[i].querySelector('.dropdown-menu').classList.add('d-none');
		}

	}
});

function isClosest(eventTarget, thisElem) {
    let result = false;
    if (!thisElem || !eventTarget) return false;

    if (eventTarget.classList.contains(thisElem)) {
        return eventTarget;
    }

    for (;true;) {
        eventTarget = eventTarget.parentElement;

        if (!eventTarget) {
			result = false;
            break;
        }

        if (eventTarget.classList.contains(thisElem)) {
			result = true;
			break;
        }
    }

    return eventTarget;
}


function isSibling(tag) {
	let arr = [];
	let arr2 = [];
	let next = tag;
	let prev = tag;

	if (!tag) return;

	for (;true;) {
		if (!prev) {
			break;
		}

		prev = prev.previousElementSibling;

		if (prev && prev.classList.contains(itemClass)) {
			arr.push(prev);
		}
	}

	for (;true;) {
		if (!next) {
			break;
		}

		next = next.nextElementSibling;

		if (next && next.classList.contains(itemClass)) {
			arr2.push(next);
		}
	}

	arr = arr.concat(arr2);
	return arr;
}

isSibling(liItem);

console.log('↑-----1-----↑');
