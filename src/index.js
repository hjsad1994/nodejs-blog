const express = require('express') 
const path = require('path') // import path
const morgan = require('morgan') // import morgan 
const {engine} = require('express-handlebars') // import express-handlebars

const app = express()
const port = 3000
// using morgan
app.use(morgan('combined'))
// using express-handlebars
app.engine('hbs', engine({
  extname: 'hbs' // change .handlebars to .hbs (main.hbs)
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')) // set local file

app.get('/', (req, res) => {
  res.render('home')
})// 0{928833492}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})