// console.log(global);   //"global" is the global object for the node outside the browser whereas inside the browser "window" is the global object .

// global.setTimeout(() => {
//     console.log("its 5 sec")
// }, 5000);

//we dont need to explicitly use the keyword global 
setTimeout(() => {
    console.log("its 5 sec");
    clearInterval(int);   //setInterval will run continously ,to break its continousness we use clearInterval(var_name) inside the setTimeout method
}, 5000);


const int = setInterval(() =>{
    console.log("hi ")
},1000);


console.log(__dirname);
console.log(__filename);
