const express = require('express')
const router = express.Router()
const stadiumsCtrl = require('../../controllers/stadiums')

router.get('/', stadiumsCtrl.index)
router.post('/', stadiumsCtrl.create)
// router.get('/:id/', stadiumsCtrl.show)
router.delete('/stadiums/:id', stadiumsCtrl.delete)

module.exports = router