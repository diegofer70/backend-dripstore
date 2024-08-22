const express = require('express')
const Controller = require('../controllers/categoriaController')
const router = express.Router()

router.get('/search', Controller.list)
router.get('/:id', Controller.listId)
router.post('',Controller.create)
router.put('/:id',Controller.update)
router.delete('/:id', Controller.deletar)

module.exports = router