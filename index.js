const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const uploadRouter = require('./routes/upload')

const port = process.env.PORT || 5000

const app = express()
  .use(helmet())
  .use(cors())
  .use(express.json({ limit: '2mb' }))
  .use(
    express.urlencoded({
      limit: '2mb',
      extended: false,
      parameterLimit: 1000000,
    })
  )

app.use('/upload', uploadRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
