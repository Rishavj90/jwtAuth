const express = require('express')
const router = express.Router()
const {
    getSignInPage,
    postCredentials
} = require('../controllers/Signin')

router.get('/', getSignInPage)
router.post('/', postCredentials)

module.exports = router;