/*
=======================
02-n-files-synchronously.js
=======================
Student ID: 23783185
Comment (Required):

=======================
*/
const fs = require("fs");
const n = 5;	//input size 0 < n < 100
const data = "Data-2";
let written = 0;
const outputDirectory = "./output"

writeSync(1);
function writeSync(i){
    let fileName = `${i.toString().padStart(2, "0")}-output.txt`;
    let path = `${outputDirectory}/${fileName}`;
    fs.writeFile(path, data, (err) => after_write(i, fileName));
    
}

function after_write(i, fileName){
    console.log(`Finished writing ${fileName}`)
    if(i >= n){ 
        console.log("Writing complete");
    } else {
        writeSync(i+1);
    }
}