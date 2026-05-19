const userDB = require('../models/userDB')

function getloginPage(req, res){
    return res.render('../views/login.ejs')
}

async function postCredentials(req, res){
    const user = await userDB.create({
        username : req.body.username,
        password : req.body.password
    })
    res.redirect('/')
}

module.exports = {
    getloginPage,
    postCredentials
}