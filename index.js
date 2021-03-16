const express = require('express')

const app = express()

let middleware = require('./middleware')

app.use(require("body-parser").json())

app.use(require("cookie-parser"))

const isProvided = require('./utilities/exports').helpers.isProvided

app.use(middleware.jsonError)

app.use('/auth', require('./routes/register.js'))

app.use("/", express.static('web'))

app.listen(process.env.PORT || 5000, () => {
    console.log("Server up and running on port: " + (process.env.PORT || 5000));
});