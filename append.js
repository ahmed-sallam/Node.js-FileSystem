const fs = require('fs');

//Appending file Synchronously
try {
    let content = "Thats Okay."
    fs.appendFileSync('data.txt', content);
    console.log("Done!");
} catch (err) {
    console.log(err);
}


//Appending file Asynchronously
let content = "Yes, Thats Okay."
fs.appendFile('data.txt',content , (err)=>{
    if(err) return console.log(err);
    console.log("Done!");
});