const express = require('express')
const router = express.Router()
const {
    getloginPage,
    postCredentials
} = require('../controllers/LoginPage')

router.get('/', getloginPage)
router.post('/', postCredentials)

module.exports = router;