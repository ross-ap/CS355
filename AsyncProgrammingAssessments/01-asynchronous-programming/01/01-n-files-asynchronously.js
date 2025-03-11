/*
=======================
01-n-files-asynchronously.js
=======================
Student ID: 23783185
Comment (Required):

=======================
*/
const fs = require("fs");
const n = 5;	//input size 0 < n < 100
const data = "Data-1";
let written = 0;
const outputDirectory = "./output";

for(let i = 0; i < n; i++){
    let fileName = `${i.toString().padStart(2, "0")}-output.txt`;
    let path = `${outputDirectory}/${fileName}`;
    fs.writeFile(path, data, after_write);

    function after_write(err){
        if(err){
            throw err;
        }
        console.log(`Finished writing File ${fileName}`);
        written++;
        if (written >= n){
            console.log(`Writing Complete`);
        }
    }
    
}



