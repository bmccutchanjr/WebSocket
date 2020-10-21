//  I'm trying to learn how to set an ExpressJS server with a websocket server.  To know if the configuration is correct, I need to
//  know that ExpressJS can serve a route.  And one route should be enough.

const chalk = require("chalk");
const express = require("express");
const path = require("path");
const router = express();

router
    .use((request, response, next) =>
    {
        console.log (chalk.blue("someone is requesting: " + request.url));
        next();
    })

    .get("/", (request, response) =>
    {
        response.status(200).sendFile(path.join(__dirname, "../public/index.html"));
    })

    .use(express.static(path.join(__dirname, "../public")))
    
    .use((request, response) =>
    {	//  A request was made for an unknown route.  That corresponds to an HTML 404 status
        //  code, so send them a 404 page!

        response.sendFile(path.join(__dirname, "../public/404.html"));
    });

module.exports = router;