const fs = require('fs');

//reading files

// fs.readFile('./docs/sample.txt',(err,data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString()); //if we donot use toString method we will get only the buffer
// });

 
//writing files

// fs.writeFile('./docs/sample2.txt','Hello world!',()=>{
//     console.log("file written");
// })



//Directories 

// if (!fs.existsSync("./assets")){            //existSync = check whether folder exits
// fs.mkdir('./assets',(err)=> {               //mkdir = make directoru=y
//     if(err){
//         console.log(err);
//     }
//     console.log("folder created");
// })
// }else {
//     fs.rmdir('./assets',(err) =>{           //rmdir = remove dir
//         if(err){
//             console.log(err);
//         }
//         console.log("DELETED!")
//     })
// }



//Deleting 

if (fs.existsSync("./docs/sample2.txt")){
    fs.unlink('./docs/sample2.txt',(err) => {
    if(err){
        console.log(err);
    }
    console.log("DELETED!!");
});
}
