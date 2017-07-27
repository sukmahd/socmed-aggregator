'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controller/facebook')


router.get('/login', controller.getUsername)
router.post('/post', controller.postToFacebook)


module.exports = router;
