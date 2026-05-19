const mongoDB = require('mongoose')

const MySchema = mongoDB.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }

})

const userDB = mongoDB.model('userDB', MySchema);
module.exports = userDB
