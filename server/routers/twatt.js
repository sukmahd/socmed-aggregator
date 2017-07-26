'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controller/twatt')

router.get('/test', controller.test)
router.get('/timeline', controller.timeline)
router.get('/search', controller.search)
router.post('/post', controller.post)


module.exports = router;
