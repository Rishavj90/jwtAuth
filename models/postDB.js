const mongoDB = require('mongoose')

const MySchema = mongoDB.Schema({
    user : {
        type : mongoDB.Schema.Types.ObjectId,
        ref : 'userDB',
        required : true
    },
    post : {
        type : String,
        required : true
    }

})

const postDB = mongoDB.model('userDB', MySchema);
module.exports = postDB
