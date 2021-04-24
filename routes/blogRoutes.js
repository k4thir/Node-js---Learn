const express = require('express');
// const Blog = require('../models/blog');         //we dont need it here we copy it to the blogControllers 
const router = express.Router();
const blogController = require('../controllers/blogController')


router.get('/blogs', blogController.blog_index);
// router.get('/blogs',(req,res) =>{
    // Blog.find().sort({createdAt: -1})
    // .then((result)=>{
    //     res.render('index',{title: 'All Blogs', blogs : result})
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
// })


router.get('/blogs/create' ,blogController.blog_create_get);
    
// router.get('/blogs/create' , (req,res) => {
//     res.render('create',{title : 'create a new blog'});

// })
//redirect in express

// app.get("/about-us",(req,res) => {
//     res.redirect('/about');                        //this automatically sets the status code as 301 
// })


//POST request

router.post('/blogs',blogController.blog_create_post);
// router.post('/blogs',(req,res)=>{
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


router.get('/blogs/:id',blogController.blog_details);

// router.get('/blogs/:id',(req,res) =>{
    // const id = req.params.id;
    // // console.log(id);  

    // Blog.findById(id)
    // .then(result => {
    //     res.render('details',{blog:result , title: "Blog Details"})             //render a view called "details" 
    // })
    // .catch(err => console.log(err));
// })


//DELETE request handlers
router.delete('/blogs/:id' , blogController.blog_delete);
// router.delete('/blogs/:id' ,(req,res) => {
//     const id = req.params.id;
//     Blog.findByIdAndDelete(id)
//     .then(result => {
//         res.json({redirect : '/blogs'})
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }) 



module.exports = router;