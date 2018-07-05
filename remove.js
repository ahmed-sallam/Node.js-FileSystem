const fs = require('fs');

//Removing Synchronously 
try {
    let fileName= './lib/data.js';
    fs.unlinkSync(fileName);
    console.log(fileName, ' removed successfully!');
} catch (err) {
    console.log(err);
}

//Removing Asynchronously 
let file2= './lib/data2.json';
fs.unlink(file2, (err)=>{
    if (err) return console.log(err);
    console.log(file2, ' removed successfully!');
});
