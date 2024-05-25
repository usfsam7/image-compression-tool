const express = require('express')
const router = express()
 
const compress_controller = require('../controllers/compress');

 

   router.post('/upload', compress_controller.compress);



   module.exports = router
