const router = require('express').Router();
const {getForm,submitFeedBack} = require('../src/controllers')

router.get('/', getForm);
router.post('/submit', submitFeedBack);


module.exports = router