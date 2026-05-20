require('dotenv').config()
const jwt = require('jsonwebtoken') 

function authenticate(req, res, next){
    //authorization : "Bearer {-TOKEN-}"

    const authHeader = req.headers['authorization']

    if(!authHeader)return res.status(401).json({msg : 'no token provided'})
    
    const token = authHeader.split(' ')[1]

    try{
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = user
        next()
    }catch(error){
        console.error(error)
    }
    
}

module.exports = authenticate

