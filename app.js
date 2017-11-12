// Basic Node.js Requires
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const fs = require('fs');
// Require for express user agent
const useragent = require('express-useragent');
// Express And BodyParser Middleware
const app = module.exports = express();
app.use(bodyParser.json());
// UserAgent middleware
app.use(useragent.express());
// Home Page GET request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'index.pug'));
});
// Page GET Request For whoAmI
app.get('/api/whoAmI', (req, res) => {
    // Taking user info
    let ipaddress = req.ips;
    let languages = req.acceptsLanguages();
    let software = req.useragent.os;
    // Outputting the info
    res.json({"ipaddress": ipaddress[0], "language": languages[0], "software": software});
});

// Server Run
app.listen(process.env.PORT || 80, () => {
    console.log('Server is on');
});