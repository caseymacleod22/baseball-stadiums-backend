const express = require('express')
const router = express.Router()
const stadiumsCtrl = require('../../controllers/stadiums')

router.get('/', stadiumsCtrl.index)
router.post('/', stadiumsCtrl.create)

module.exports = router