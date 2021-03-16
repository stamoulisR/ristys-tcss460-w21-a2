/*
 * Express is the framework we're going to use to handle routing of HTTP Requests.
 * https://expressjs.com/ - a quick check in package.json shows Express 4.x
 */
const express = require('express')
//Create a new instance of express
const app = express()

/*
 * This project includes a user made module called middleware. It includes helpful
 * middleware functions. 
 */
let middleware = require('./middleware')

/*
 * This (3rd party) middleware function parses the HTTP Request Body into JSON. 
 * When the body exists but does not parse, an error is passed on to the next
 * function. 
 */
app.use(require("body-parser").json())

const isProvided = require('./utilities/exports').helpers.isProvided

/*
 * This middleware function will respond to improperly formed JSON in found in 
 * an HTTP Request BODY.
 */
app.use(middleware.jsonError)

app.use('/auth', require('./routes/register.js'))

/*
 * A simple Node.js endpoint that responds with HTML.
 */


app.use('/demosql', require('./routes/sqlController'))


app.get("/params", (request, response) => {
    //Note the use of request.query -> a GET request sends arguments in the URL
    if (isProvided(request.query.name)) {
        response.send({
            //req.query is a reference to arguments in the POST body
            message: "Hello, " + request.query.name + "! You sent a GET Request"
        })
    } else {
        response.status(400)
        response.send({
            message: "Missing required information"
        })
    }
})

app.post("/params", (request, response) => {
    //Note the use of request.body -> a POST request sends arguments in the HTTP body
    if (isProvided(request.body.name)) {
        response.send({
            //req.body is a reference to arguments in the POST body
            message: "Hello, " + request.body.name + "! You sent a POST Request"
        })
    } else {
        response.status(400)
        response.send({
            message: "Missing required information"
        })
    }
})


/*
 * When clients connect to the base URL, hosts html and other static files found 
 * in the web directory.
 */
app.use("/", express.static('web'))

/*
 * Serve the API documentation generated by apidoc as HTML. 
 * https://apidocjs.com/
 */
// app.use("/api", express.static('apidoc'))

/* 
* Heroku will assign a port you can use via the 'PORT' environment variable
* To access an environment variable, use process.env.<ENV>
* If there isn't an environment variable, process.env.PORT will be null (or undefined)
* If a value is 'falsy', i.e. null or undefined, javascript will evaluate the rest of the 'or'
* In this case, we assign the port to be 5000 if the PORT variable isn't set
* You can consider 'let port = process.env.PORT || 5000' to be equivalent to:
* let port; = process.env.PORT;
* if(port == null) {port = 5000} 
*/ 
app.listen(process.env.PORT || 5000, () => {
    console.log("Server up and running on port: " + (process.env.PORT || 5000));
});