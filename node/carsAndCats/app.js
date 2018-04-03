var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){

    console.log('client request URL: ', request.url);
    const req = request.url.split('/'),
    fileType   = req[1], 
    file       = req[2];
    console.log(fileType, file)

    if(fileType === 'cars') {
        if(file === 'new'){
            fs.readFile('newCar.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents); 
                response.end();
            });            
        }
        else{
            fs.readFile('cars.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents); 
                response.end();
            });            
        }

    }
    else if (fileType === "cats") {
        fs.readFile('cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }
    else if (fileType === 'images') {
        serveImage(file)
    }
    else if(fileType === 'styles'){
        serveCSS(file)
    }
    else {
        response.end('File not found!!!');
    }

    function serveImage(file){
        fs.readFile(`images/${file}`, function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    function serveCSS(file){
        fs.readFile(`styles/style.css`, 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type' : 'text/css'})
            response.write(contents)
            response.end()
        })
    }
});

server.listen(6789);

console.log("Running in localhost at port 6789");