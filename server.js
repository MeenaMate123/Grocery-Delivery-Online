// Create a express server

const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');

const port = process.env.PORT || 3400; // check port in environment if not then execute on 3000

// const port;
// if(process.env.PORT)
// 	port = process.env.PORT;
// else
// 	port =3000;
// above statment are similar to hide statement

//set Route
app.get('/',(req, res) => {
	res.render('home');
});

//set Template engine
app.use(expressLayout);
app.set('views', path.join(__dirname,'./Resources/views'));
app.set('view engine', 'ejs');

app.listen(port, () =>{
	console.log(`Listening on port ${port}`);
});

