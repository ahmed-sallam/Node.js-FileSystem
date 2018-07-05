const fs = require('fs');

//Reading file Synchronously
 
try {
    let data = fs.readFileSync('data.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(err);
}


//Reading file Asynchronously
fs.readFile('data.txt', 'utf-8', (err, data)=>{
    if(err) return console.log(err);
    console.log(data);
});