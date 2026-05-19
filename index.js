const express = require('express')
require('dotenv').config()
const mongoDB = require('mongoose')
const loginRouter = require('./routes/login')

mongoDB.connect(process.env.MONGODB_URI)
    .then(()=>console.log('MongoDB connected'))
    .catch((error)=>console.error(error))

const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')

//middlewares
app.use(express.urlencoded({extended: true}))

//routes
app.get('/', (req, res)=> res.send('homepage'))
app.use('/login', loginRouter)

app.listen(process.env.PORT, ()=>console.log("app started"))

