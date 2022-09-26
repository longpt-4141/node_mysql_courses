const express = require('express');
const router = express.Router();

const usersController = require('../../controller/UsersController')

router.get('/create', usersController.create);
router.post('/stored',usersController.stored);
router.get('/:id/edit',usersController.edit);
router.put('/:id', usersController.update);
router.get('/:id', usersController.detail);


module.exports = router