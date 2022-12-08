const express = require('express') // 
const path = require('path')
const morgan = require('morgan') // import morgan 
const {engine} = require('express-handlebars')

const app = express()
const port = 3000
// using morgan
app.use(morgan('combined'))
// using express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})// 0{928833492}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})