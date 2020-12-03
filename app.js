console.log('Running app.js');

const fs = require('fs'),
		_ = require('lodash'),
		todos = require('./todos.js'),
		yargs = require('yargs');

const argv = yargs.argv;
const command = argv._[0];

console.log(`Running Command: ${command}`);

if (command === 'addTodo') {
	todos.addTodo(argv.title);
} else if (command === 'deleteTodo') {
	let todoDeleted = todos.deleteTodo(argv.title);
	let message = todoDeleted ? 'Todo was deleted' : 'Todo not found';
	console.log(message);
} else if (command === 'readTodo') {
	let todos = todos.readTodo(argv.title);
	if (todo) {
		console.log('Great! The todo was found.');
		todos.logTodo(todo);
	} else {
		console.log('Whoops! The todo was not found.');
	}
} else {
	console.log('Invalid command.');
}