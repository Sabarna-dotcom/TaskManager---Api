//This file will handle the connection with mongoDB

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin@mydb.8003h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/TaskManager',{ useNewUrlParser:true }).then(()=>{

    console.log('Connected to mongodb successfully.')

}).catch((err)=>{

    console.log('Error connecting to mongodb')
    console.log(err)
    
});
