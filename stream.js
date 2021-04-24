const fs = require('fs');

const readStream = fs.createReadStream('./docs/stream.txt',{encoding :'utf8'});
const writeStream = fs.createWriteStream('./docs/stream3.txt');

// readStream.on('data',(chunk)=>{
//     console.log("-------NEW DATA--------")
//     console.log(chunk);
//     writeStream.write("---new data----")
//     writeStream.write(chunk);
// })


    
//piping
readStream.pipe(writeStream);  //avoid uaing the code from line 6 - 11 
