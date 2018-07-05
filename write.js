const fs = require('fs');

//writing file Synchronously
try {
    let content = "Hi every on, my name is Ahmed Sallam."
    fs.writeFileSync('data.txt', content);
    console.log("Done!");
} catch (err) {
    console.log(err);
}


//writing file Asynchronously
let content = "Hi every on, my name is Ahmed."
fs.writeFile('data.txt',content , (err)=>{
    if(err) return console.log(err);
    console.log("Done!");
});