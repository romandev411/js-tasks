console.log('↓-----1-----↓');

const URL = 'https://jsonplaceholder.typicode.com/';
const tUsers = document.querySelector('.js-users');

class CustomHttp {
	get(url, func) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
		xhr.addEventListener('load', () => {
			return func(xhr.responseText)
		});
	}

	post(url, data, func) {
		const xhr = new XMLHttpRequest();
		xhr.open('POST', url);
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send(data);
		xhr.addEventListener('load', () => {
			return func(xhr.responseText)
		});
	}
}

const http = new CustomHttp();

http.get(`${URL}users`, (response) => {
	generateUsers(tUsers ,JSON.parse(response));
});

function usersTemplate(users) {
	return `
		<ul>
			<li class="item">
				<div class="user">${users.name}</div>

				<div class="user-info" style="display: none;">
					<ul>
						<li>Phone number: ${users.phone}</li>
						<li>Nick Name ${users.username}</li>
						<li>Website: ${users.website}</li>
						<li>Address: ${users.address.street}</li>
					</ul>
				</div>
			</li>
		</ul>
	`
}

function generateUsers(tag, response) {
	for (let i = 0; i < response.length; i++) {
		tag.insertAdjacentHTML('afterbegin', usersTemplate(response[i]));
	}
}

tUsers.addEventListener('click', (e) => {
	if (!e.target.classList.contains('user')) return;

	e.target.closest('.item').querySelector('.user-info').style.display = 'block';
});

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

const btn = document.getElementById('submit');
const tUsers2 = document.querySelector('.js-users2');
const postHttp = new CustomHttp();

function usersTemplate2(response) {
	return `
		<ul>
			<li class="item"> ${response.name} </li>
			<li class="item"> ${response.email} </li>
			<li class="item"> ${response.username} </li>
			<li class="item"> ${response.phone} </li>
			<li class="item"> ${response.website} </li>
		</ul>
	`
}

function generateUsers2(tag, response) {
	tag.insertAdjacentHTML('afterbegin', usersTemplate2(response));
}

btn.addEventListener('click', () => {
	const data = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		username: document.getElementById('username').value,
		phone: document.getElementById('phone').value,
		website: document.getElementById('website').value,
	};

	console.log(document.getElementById('name').value)

	postHttp.post(`${URL}users`, JSON.stringify(data), (response) => {
		console.log(JSON.parse(response))
		generateUsers2(tUsers2, JSON.parse(response));
	});
});

console.log('↑-----2-----↑');
