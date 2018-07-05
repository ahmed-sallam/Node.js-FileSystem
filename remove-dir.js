const fs = require('fs');

// moving directory Asynchronous
fs.rename('./lib/logs', './logs', (err)=>{
    if(err) return console.log(err);
    console.log('dir moved Successfully');
});

//removing directory
//Note should the directory be empty
// Asynchronous
let files = fs.readdirSync('./logs')
    files.forEach((file)=>{
        fs.unlinkSync('./logs/'+file);
    });

fs.rmdir('./logs', (err)=>{
    if(err) return console.log(err);
    console.log('dir moved Successfully')
});