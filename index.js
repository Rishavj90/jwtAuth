require('dotenv').config()

const express = require('express')
const mongoDB = require('mongoose')
const loginRouter = require('./routes/login')
const signInRouter = require('./routes/signIn')
const authenticate = require('./middlewares/authenticate')

mongoDB.connect(process.env.MONGODB_URI)
    .then(()=>console.log('MongoDB connected'))
    .catch((error)=>console.error(error))

const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
app.get('/',authenticate, (req, res)=> res.send('homepage'))
app.use('/signin', signInRouter)
app.use('/login', loginRouter)

app.listen(process.env.PORT, ()=>console.log("app started"))

