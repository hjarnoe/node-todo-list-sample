console.log('Running app.js');

const fs = require('fs'),
		_ = require('lodash'),
		todos = require('./todos.js'),
		yargs = require('yargs');

const argv = yargs.argv;
const command = argv._[0];

console.log('Running Command: ', command);
console.log(`Running Command: ${command}`);

if (command === 'addTodo') {
	todos.addTodo(argv.title);
} else {
	console.log('Invalid command.');
}