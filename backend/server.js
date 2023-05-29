require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express();













app.listen(process.env.PORT || 5000, () => { console.log(`server successfully started on port ${process.env.PORT}`) })
