const { Router } = require('express');
const {createForm, add, remove, removeByDate, detail, form, favorite } = require('./ad.controller');

const router = Router();

router.get('/', createForm );
router.get('/:userId',form );
router.get('/delete/:id', remove);
router.get('/detail/:id', detail);
router.get('/favorite/:idAd', favorite);

router.post('/add', add);
router.post('/delete_by_date', removeByDate);



module.exports = router;