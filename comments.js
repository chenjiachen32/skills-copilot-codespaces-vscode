// Create web server and listen on port 3000
// Run 'node comments.js' in terminal to start the server
// Open browser and navigate to http://localhost:3000/ to view the server

const http = require('http');
const fs = require('fs');

// Create server and listen on port 3000
http.createServer(function (req, res) {
    // Open file on server
    fs.readFile('index.html', function(err, data) {
        // Send the html file to the browser
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3000);