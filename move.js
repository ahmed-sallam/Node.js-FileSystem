const fs= require('fs');

//renaming Asynchronously 
fs.rename('./lib/data.js', './data.js', (err)=>{
    if(err) return console.log(err);
    console.log('file moved successfully');
});

//renaming Synchronously 
try {
    fs.renameSync('./data.js', './lib/data.js');
    console.log('file moved successfully');
} catch (err) {
    console.log(err)
}