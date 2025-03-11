/*
=======================
03-personal-hosts-file.js
=======================
Student ID: 23783185
Comment (Required):

=======================
*/
const fs = require("fs");
const dns = require("dns");
const input_file = "./input/domains.txt";
const output_file = "./output/hosts.txt";

fs.readFile(input_file, "utf8", after_read);
function after_read(err, data){
    let domains = data.split("\r\n");
    let results = [];
    for(let i = 0; i < domains.length; i++){
        resolve(i, domains, results);
    }
}

function resolve(i, domains, results){
    dns.resolve(domains[i], after_resolution);
    function after_resolution(err, records){
        results.push(`${records[0]} \t ${domains[i]}`);
        if(results.length == domains.length){
            fs.writeFile(output_file, results.join("\r\n"), () => console.log("Finished resolving domains."));
        }
    }
}