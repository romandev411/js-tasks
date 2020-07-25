let string = 'some test string';

const todo = [];
const form = document.querySelector('.js-todo-form');
const tbody = document.querySelector('.js-todo-tbody');
const title = document.querySelector('.js-todo-title');
const text = document.querySelector('.js-todo-text');
const addTodoBtn = document.querySelector('.js-todo-btn');

addTodoBtn.addEventListener('click', function() {
	const valTitle = title.value;
	const valText = text.value;

	addTodo(valTitle, valText);
	generateTable();

	clearInput()
});

tbody.addEventListener('click', function(event) {
	if(event.target.classList.contains('js-delete-todo-btn')) {
		const id = event.target.parentElement.parentElement.id;

		deteleTodo(id);
		generateTable();
	}

	if(event.target.classList.contains('js-edit-todo-btn')) {
		const id = event.target.parentElement.parentElement.id;
		const valTitle = title.value;
		const valText = text.value;

		editTodo(valTitle, valText, id);
		generateTable();

		clearInput()
	}
});

function clearInput() {
	title.value = '';
	text.value = '';
}

function checkInput(title, text) {
	if (title < 1 || text < 1) {
		alert('enter title or text');
		return;
	}

	return true;
}

function generateId() {
	const num = 100000000000000;
	return id = (Math.random() * num).toFixed();
}

function template(obj) {
	return `
		<tr id="${obj.id}">
			<td>${obj.title}</td>
			<td>${obj.text}</td>
			<td>
				<button class="todo-list__delete-btn  js-delete-todo-btn" type="button">delete</button>
				<button class="todo-list__delete-btn  js-edit-todo-btn" type="button">edit</button>
				${obj.id}
			</td>
		</tr>
	`;
}

function addTodo(title, text) {
	if(!checkInput(title, text)) {
		return;
	}

	todo.push({
		title: title,
		text: text,
		id: generateId(),
	});
}

function deleteTable() {
	const lengthChild = Array.prototype.slice.call(tbody.children);

	for (let i = 0; i < lengthChild.length; i++) {
		lengthChild[i].remove();
	}
}

function generateTable() {
	deleteTable();

	for (let i = 0; i < todo.length; i++) {
		tbody.insertAdjacentHTML('afterbegin', template(todo[i]));
	}
}

function deteleTodo(id) {
	for (let i = 0; i < todo.length; i++) {
		if (todo[i].id == id) {
			todo.splice(i, 1)
		}
	}
}

function editTodo(title, text, id) {
	if(!checkInput(title, text)) {
		return;
	}

	for (let i = 0; i < todo.length; i++) {
		if (todo[i].id == id) {
			todo[i].title  = title;
			todo[i].text  = text;
		}
	}
}
