const userDB = require('../models/userDB')

function getSignInPage(req, res){
    return res.render('../views/signin.ejs')
}

async function postCredentials(req, res){
    const user = await userDB.create({
        username : req.body.username,
        email : req.body.email,
        password : req.body. password
    })
    return res.redirect('/')
}

module.exports = {
    getSignInPage,
    postCredentials
}
