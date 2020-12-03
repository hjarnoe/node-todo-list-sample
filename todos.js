console.log('Starting todos.js');

const fs = require('fs');

const addTodo = (title) => {
	let todos = [];
	let todo = {
		title
	};
	
	try {
		let todosString = fs.readFileSync('todos-data.json');
		todos = JSON.parse(todosString);
	} catch (e) {
	
	}
	
	let duplicatetodos = todos.filter((todo) => todo.title === title);
	
	if (duplicatetodos.length === 0) {
		todos.push(todo);
		fs.writeFileSync('todos-data.json', JSON.stringify(todos));
	}
};

module.exports = {
	addTodo
};