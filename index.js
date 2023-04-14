const express = require('express');
const app = express();
const path = require('path');
const bodyParser =  require('body-parser');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/register', require('./router/form'));
app.use('/employees', require('./router/viewDocs'));
app.use('/delete-employee', require('./router/deleteUser'));
app.use('/update-employee', require('./router/updateUser'));

app.get('/', (req,res)=>{
    res.render('home');
})


const port = 3000;
app.listen(port, () =>{
    console.log("Listening at port");
})