console.log('↓-----1-----↓');

(function() {
	const wrapTemplate = document.querySelector('.js-sect');
	const titleTd = ['#', 'name', 'email', 'balance'];

	const users = [
			{
			"_id": "5d220b10e8265cc978e2586b",
			"isActive": true,
			"balance": 2853.33,
			"age": 20,
			"name": "Buckner Osborne",
			"gender": "male",
			"company": "EMPIRICA",
			"email": "bucknerosborne@empirica.com",
			"phone": "+1 (850) 411-2997",
			"registered": "2018-08-13T04:28:45 -03:00",
				"nestedField": { total: 300 }
			},
			{
			"_id": "5d220b10144ef972f6c2b332",
			"isActive": true,
			"balance": 1464.63,
			"age": 38,
			"name": "Rosalie Smith",
			"gender": "female",
			"company": "KATAKANA",
			"email": "rosaliesmith@katakana.com",
			"phone": "+1 (943) 463-2496",
			"registered": "2016-12-09T05:15:34 -02:00",
				"nestedField": { total: 400 }
			},
			{
			"_id": "5d220b1083a0494655cdecf6",
			"isActive": false,
			"balance": 2823.39,
			"age": 40,
			"name": "Estrada Davenport",
			"gender": "male",
			"company": "EBIDCO",
			"email": "estradadavenport@ebidco.com",
			"phone": "+1 (890) 461-2088",
			"registered": "2016-03-04T03:36:38 -02:00",
				"nestedField": { total: 200 }
			}
	];

	function createHeader(arr) {
		let template = ``;

		for (let i = 0; i < arr.length; i++) {
			template +=
				`
					<th>${arr[i]}</th>
				`;
		}

		return template;
	}

	function createTbody(users) {
		let template = ``;

		for (let i = 0; i < users.length; i++) {
			template = template +
				`
					<tr>
						<td>${i+1}</td>
						<td>${users[i].name}</td>
						<td>${users[i].email}</td>
						<td>${users[i].balance}</td>
					</tr>
				`;
		}

		return template;
	}

	function createTfoot(users) {
		let template = ``;
		let balanceUser = 0;

		for (let i = 0; i < users.length; i++) {
			balanceUser += users[i].balance;
		}

		template =
			`
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td>Total balance: ${balanceUser}</td>
				</tr>
			`;

		return template;
	}

	function createTemplate() {
		let template =
			`
				<table>
					<thead>
						<tr>
							${createHeader(titleTd)}
						</tr>
					</thead>

					<tbody>
						${createTbody(users)}
					</tbody>

					<tfoot>
						${createTfoot(users)}
					<tfoot>
				</table>
			`;
		return template;
	}

	console.log(createTemplate());

	wrapTemplate.insertAdjacentHTML('afterbegin', createTemplate())

})();

console.log('↑-----1-----↑');
