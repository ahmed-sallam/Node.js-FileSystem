const fs = require('fs');

const stream = fs.createReadStream('./data.txt', 'UTF-8');
let data = "";
stream.on('data', (chunk)=>{
    console.log(` chunk ${chunk} --`);
    data += chunk;
});
stream.on('end', ()=>{
    console.log(`Data length ${data.length}`)
});