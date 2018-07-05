const fs = require('fs');

//renaming Synchronously 
try{
    fs.renameSync('./lib/data.json', './lib/data.js');
    console.log('File renamed successfully');
}catch (err){
    console.log(err);
}
console.log('DOne!');

//renaming Asynchronously
fs.rename('./lib/data2.js', './lib/data2.json', (err)=>{
    if (err) return console.log(err);
    console.log('File renamed successfully');
});