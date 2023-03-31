const express = require('express')
const userRouter = require('./routes/user.routes')
const port = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use('/nkse', userRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))