const express = require('express');
const app = express()

const bodyParser = require('body-parser');



 PORT = 9000

 app.listen(PORT , () => {
    console.log(`server is running on port ${PORT}`)
 });


    app.use(express.json());

  /* 
  It specifically parses incoming HTTP requests that have a JSON payload (data formatted in JavaScript Object Notation).
  When a request with a Content-Type header of application/json is received, express.json() takes over:
 - It reads the request body (the actual data sent).
 - Parses the JSON-formatted data into a JavaScript object.
 - Makes this parsed object accessible through the req.body property of 
   the request object (req). 
  */
    // app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: "true" }));
   
    // - This middleware specifically parses incoming HTTP requests that have URL-encoded data in their bodies.

    // - By using app.use(bodyParser.urlencoded({ extended: "true" }));, you enable your Express application to handle data submitted from HTML forms (which typically use URL-encoded format).

    // - The extended: true option instructs the middleware to use the qs library for parsing. This allows for parsing more complex data structures beyond just strings, including nested objects and arrays. This provides a more JSON-like experience with URL-encoded data.


 const compress_router = require('./routes/compress');


 app.use('/api', compress_router);