// Basic Node.js Requires
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
// Require for express user agent
const useragent = require('express-useragent');
// Express And BodyParser Middleware
const app = module.exports = express();
app.use(bodyParser.json());
// UserAgent middleware
app.use(useragent.express());
// Page GET request
app.get('/api/whoAmI', (req, res) => {
    // Taking user info
    let ipaddress = req.ip;
    let languages = req.acceptsLanguages();
    let software = req.useragent.os;
    // Outputting the info
    res.json({"ipaddress": ipaddress, "language": languages[0], "software": software});
});

// Server Run
app.listen(80, () => {
    console.log('Server Is Running.');
});