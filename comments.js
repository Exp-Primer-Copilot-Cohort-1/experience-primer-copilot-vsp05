// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(request, response){
    var parsedURL = url.parse(request.url);
    var resource = parsedURL.pathname;
    console.log('resource = ' + resource);

    if(resource == '/comments'){
        if(request.method == 'POST'){
            console.log('POST request');
            request.on('data', function(data){
                var text = data.toString();
                var parsedQuery = querystring.parse(text, '&', '=');
                console.log('POST data = ' + text);
                console.log('name = ' + parsedQuery.name);
                console.log('comment = ' + parsedQuery.comment);
                response.writeHead(302, {'Location': 'comment.html'});
                response.end();
            });
        } else {
            console.log('GET request');
            response.writeHead(200, {'Content-Type': 'text/html'});
            fs.readFile('comment.html', function(error, data){
                response.end(data);
            });
        }
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('404 Page Not Found');
    }
});

server.listen(80, function(){
    console.log('Server is running...');
});