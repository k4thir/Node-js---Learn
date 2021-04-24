const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogsSchema = new Schema({
    title :{
        type: String,
        required: true
    },
    snippet :{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
}, {timestamps : true})                 //timestamps is an optional parameter used to store the time when it is created etc...


const Blog = mongoose.model('Blog',blogsSchema);                //first arguent should singular of collection name and secnd argument will the schema name 


module.exports = Blog;