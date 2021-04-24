const express = require('express');
const morgan = require('morgan');           //including morgan middleware
const mongoose = require('mongoose');       //including mongoose
// const Blog = require('./models/blog');       //we are not using this in this file anymore 
const { render } = require('ejs');

const blogRoutes =require('./routes/blogRoutes');

//creating express app
const app = express();

//connect to DB
const dbURI = 'mongodb+srv://kathir:kathir123@net-ninjas.8ifps.mongodb.net/net-ninjas?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))                     //we use app.listen here because we want to listen only if the server connects to DB 
    .catch((err) => console.log(err))                       //we will get a deprecation warning if we donnot pass the second argument



//register view engine 
app.set('view engine','ejs');    //.set() is used to configure application settings ,here view engine is one of the setting and we are setting it as 'ejs'

//by default express and ejs will look for 'views' folder for html files or to store templates

// app.set('views','myviews');    //to change the directory we change the setting views as myviews(directory name)





//middleware
// app.use((req,res,next) => {
//     console.log('New request made');
//     console.log('Host : ',req.hostname);
//     console.log('Path : ',req.path);
//     console.log('Method : ',req.method);
//     next();                                         // next() should be used or else express wont know how to move on and will stuck up with this middleware and page wont load
// })


//3rd party middleware MORGAN

app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))


// mongoose and mongo sandbox routes 
// app.get('/add-blog' ,(req,res) =>{
//     const blog = new Blog({ 
//         title : 'New Blog',
//         snippet : 'About new Blog 2',
//         body : 'More about new blog'                                               
//     });

//     blog.save()                                                         //to save the object to the DB
//     .then((result) => {
//         res.send(result)
//         // console.log(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })


// //to view all the blogs
// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })
// })



// //to get a single doc by its ID 
// app.get('/single-blog',(req,res) => {
//     Blog.findById('607e6d1719ca561fe88a0a57')           //ID can be found in the DB each doc will have different object ID 
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=> {
//         console.log(err);
//     })
// })






//routes
app.get('/', (req,res) => {

    // res.write("hello world!");      //we can use this old method but res.send is more efficient
    // res.end();
    // res.send("<p>hello world!!</p>");
//to send html file as response
    // res.sendFile('./views/index.html', {root : __dirname});

    //we cannot directly send EJS files as response with res.sendFile() method .so we use res.render() method
   
//     const blogs = [
//         {title: 'Blog 1',snippet:'loresum sdfhsb sdvshd'},
//         {title: 'Blog 2',snippet:'loresum sdfhsb sdvshd'},
//         {title: 'Blog 3',snippet:'loresum sdfhsb sdvshd'}
//     ];
//     res.render('index', { title :'Home' ,blogs});
        res.redirect('/blogs');
})

app.get('/about',(req,res) => {
    // res.send("<h1>About page</h1>");

    res.sendFile('./views/about.html', {root : __dirname});

    res.render('about',{title : 'About'});

    
})



//blog routes      BLOG ROUTES ARE COPIED TO BLOGROUTES.JS


app.use(blogRoutes);
// app.get('/blogs',(req,res) =>{
//     Blog.find().sort({createdAt: -1})
//     .then((result)=>{
//         res.render('index',{title: 'All Blogs', blogs : result})
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })




// app.get('/blogs/create' , (req,res) => {
//     res.render('create',{title : 'create a new blog'});

// })
// //redirect in express

// // app.get("/about-us",(req,res) => {
// //     res.redirect('/about');                        //this automatically sets the status code as 301 
// // })


// //POST request
// app.post('/blogs',(req,res)=>{
//     // console.log(req.body)
//     const blog = new Blog(req.body);                    //req.body contains all the data that submitted through web form

//     blog.save()

//     .then((result)=>{
//         res.redirect('/blogs');
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })


// app.get('/blogs/:id',(req,res) =>{
//     const id = req.params.id;
//     // console.log(id);  

//     Blog.findById(id)
//     .then(result => {
//         res.render('details',{blog:result , title: "Blog Details"})             //render a view called "details" 
//     })
//     .catch(err => console.log(err));
// })


// //DELETE request handlers
// app.delete('/blogs/:id' ,(req,res) => {
//     const id = req.params.id;
//     Blog.findByIdAndDelete(id)
//     .then(result => {
//         res.json({redirect : '/blogs'})
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })




//404

app.use((req,res) =>{                                           //we should use this method after all the pages as if we use it before the any page then it wont recognize and it will redirect to 404 page     
    // res.status(404).sendFile('./views/404.html', {root : __dirname});        //we should manually set the status code as 404 coz by default the code will be 200    
    
    res.status(404).render('404',{title : '404'});
})