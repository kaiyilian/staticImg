var http = require('http');

var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {
    // console.log('request.url',request.url)
    response.writeHead(200, {
        'contet-Type': 'text/html;charset=utf-8',
        // 'Content-Type': 'image/jpeg'
    });

    if (request.url !== '/favicon.ico') {
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, '');
        console.log('pathname===', pathname)
     
        fs.readFile(pathname, 'binary', function (err, filedata) {
            // console.log('filedata==',filedata)
            if (err) {
                console.log(err);
                return;
            } else {
                response.write(filedata, 'binary');
                response.end();
            }
        });
    }

    console.log('主程序执行完毕');

}).listen(8000);
console.log('now Server port is 8000');


