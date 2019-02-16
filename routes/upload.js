const express = require('express')
var multer = require('multer')
const { uploadFile } = require('../controllers/upload')

var upload = multer({ storage: multer.memoryStorage() })

const router = express.Router()

router.post('/', upload.single('upfile'), uploadFile)

module.exports = router
