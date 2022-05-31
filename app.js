//basic setup (you should know this, dumdum)
const express = require("express");
const bodyParser = require("body-parser");
const { sendfile } = require("express/lib/response");
const app = express();

//allows for static files both in the main root folder and in the img folder to be used
app.use(express.static(__dirname)); 
app.use(express.static(__dirname + "/img"));

//responds to the get request with the HTML file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

//sends site to port 3000
app.listen("3000", function() {
})