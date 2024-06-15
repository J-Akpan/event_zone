const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars');

const PORT = process.env.PORT || 9000

const app = express()


// handlebars middlewaress
app.engine('handlebars', engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');
app.set("views", "./views");


// route to the home pag
app.get('/', (req, res) => {
    res.render('home')
})



// bodyParser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// serving static files from public folder

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// serving a static folder.
app.use(express.static(path.join(__dirname, 'public')))


app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})