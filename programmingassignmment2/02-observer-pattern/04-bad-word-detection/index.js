/*
=======================
04 - Bad Word Detection - index.js
=======================
Student ID:
Comment (Required):

=======================
*/
const readline = require("readline");
const BadWordEmitter = require("./modules/BadWordEmitter");
const rl = readline.createInterface({input: process.stdin, output:process.stdout});

let current_line = 1;





const shell_prompt = function(){
	current_line++;
	process.stdout.write("> ")
}
rl.on("line", shell_prompt);

console.clear();
console.log("Welcome to the chat")
shell_prompt();