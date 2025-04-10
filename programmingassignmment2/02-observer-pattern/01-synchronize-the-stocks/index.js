/*
=======================
01 - Synchronize the Stocks - QuoteEmitter.js
=======================
Student ID:
Comment (Required):

=======================
*/

const Stock = require("./modules/Stock");
const DayEmitter = require("./modules/DayEmitter");
const portfolio_data = require("./data/stocks.json");

const day_emitter = new DayEmitter(2400);
let portfolio = portfolio_data.map(stock => new Stock({...stock, day_emitter}));
let current_line = portfolio.length + 1;

portfolio.forEach(function(stock, index){
	stock.on("newday", function({ticker, name, price, previous, change}){
		process.stdout.cursorTo(0, index + 1);
		process.stdout.clearLine();
		
		
		console.log(`${ticker} ${name} ${price.toFixed(2)} ${change.toFixed(2)}`);
		// On each newday console.log is called |portfolio.length| number of times.
		// Replace all these calls with a single console.table
		
		process.stdout.cursorTo(0, current_line);
	});
});

day_emitter.on("newday", function({mm_dd}){
	process.stdout.cursorTo(0, 0);
	process.stdout.clearLine();
	process.stdout.write(mm_dd);
	process.stdout.cursorTo(0, current_line);
});
day_emitter.start();