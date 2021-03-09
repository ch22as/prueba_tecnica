const { Router } = require('express');
const {createForm, add, remove } = require('./ad.controller');

const router = Router();

router.get('/', createForm );
router.get('/delete/:id', remove);

router.post('/add', add);


module.exports = router;