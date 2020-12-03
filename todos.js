console.log('Starting todos.js');

const fs = require('fs');

// Add a todo item
const addTodo = (title) => {
	let todos = fetchTodos();
	let todo = {
		title
	};
	
	let duplicatetodos = todos.filter((todo) => todo.title === title);
	
	if (duplicatetodos.length === 0) {
		todos.push(todo);
		saveTodos(todos);
		return todo;
	}
};

// Delete a todo item
const deleteTodo = (title) => {
	let todos = fetchTodos();
	let filteredtodos = todos.filter((todo) => todo.title !== title);
	saveTodos(filteredtodos);
	
	return todos.length !== filteredtodos.length;
};

// Read a todo item
const readTodo = (title) => {
	let todos = fetchTodos();
	let filteredtodos = todos.filter((todo) => todo.title === title);
	return filteredtodos[0];
}

// Utility functions
const fetchTodos = () => {
	
	try {
		let todosString = fs.readFileSync('todos-data.json');
		return JSON.parse(todosString);
	} catch (e) {
		return [];
	}
};

const saveTodos = (todos) => {
	fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};

const logTodo = (todo) => {
	console.log('------');
	console.log(`It's title is: ${todo.title}`);
};

module.exports = {
	addTodo,
	deleteTodo,
	readTodo,
	logTodo
};