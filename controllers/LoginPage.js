require('dotenv').config()

const userDB = require('../models/userDB')
const jwt = require('jsonwebtoken')

function getloginPage(req, res){
    return res.render('../views/login.ejs')
}

async function postCredentials(req, res){
    const user = await userDB.find({
        username : req.body.username,
        password : req.body.password
    })
    const payload = {
        username : user.username,
        email : user.email,
    }
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET)

    return res.json({
        message: 'Login successful',
        token: accessToken 
    });
    }

module.exports = {
    getloginPage,
    postCredentials
}