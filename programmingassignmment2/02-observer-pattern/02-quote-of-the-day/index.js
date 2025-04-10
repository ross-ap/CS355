/*
=======================
02 - Quote of the Day - index.js
=======================
Student ID:
Comment (Required):

=======================
*/
const DayEmitter = require("./modules/DayEmitter");
const QuoteEmitter = require("./modules/QuoteEmitter");

const day_emitter = new DayEmitter(2400);





day_emitter.on("newday", function({mm_dd}){
	process.stdout.cursorTo(0, 0);
	process.stdout.clearLine();
	console.log(mm_dd);
});
day_emitter.start();