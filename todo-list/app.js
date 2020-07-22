let string = 'some test string';

const todo = [];
const form = document.querySelector('.js-todo-form');
const tbody = document.querySelector('.js-todo-tbody');
const title = document.querySelector('.js-todo-title');
const text = document.querySelector('.js-todo-text');
const addTodoBtn = document.querySelector('.js-todo-btn');


function generateId() {
	const num = 100000000000000;
	return id = (Math.random() * num).toFixed();
}

function template(obj) {
	return `
		<tr id="${obj.id}">
			<td>${obj.title}</td>
			<td>${obj.text}</td>
			<td></td>
		</tr>
	`;
}

function addTodo(title, text) {
	todo.push({
		title: title,
		text: text,
		id: generateId(),
	});
}

function generateTable() {
	for (let i = 0; i < todo.length; i++) {
		tbody.insertAdjacentHTML('afterbegin', template(todo[i]));
	}
}
addTodo('title1', 'text1')
generateTable()



console.log(todo)