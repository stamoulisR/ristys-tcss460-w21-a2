const express = require('express')
const cookieParser = require('cookie-parser')
const { registrationRouter } = require('./routers')

const app = express()
let middleware = require('./middleware')

app.use(require("body-parser").json())
app.use(cookieParser())

app.use(middleware.jsonError)

app.use('/auth', registrationRouter)

app.use("/", express.static('web'))

app.listen(process.env.PORT || 5000, () => {
    console.log("Server up and running on port: " + (process.env.PORT || 5000));
});
