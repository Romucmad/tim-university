const http = require('http');
const url = require('url');
var fs = require('fs');

const data = ['add', 'div', 'sub', ',mul'];
const requestListener = function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    console.log(typeof (queryObject));

    if (!('do' in queryObject) || !('first' in queryObject) || !('second' in queryObject)) {
        fs.readFile('instructions.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
            res.write(data);
            return res.end();
        });
        return;
    }
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);

    const doData = queryObject['do'];
    let first = null;
    let second = null;
    try {
        first = parseFloat(queryObject['first']);
        second = parseFloat(queryObject['second']);
    } catch {
        return res.end(`
        <html><body><h1>
            There is an error inside your numbers, please check them
        </h1></body></html>
    `);
    }
    // handle check numbers 

    // --<
    let result = '';

    switch (doData) {
        case 'add':
            result = first + second;
            break;
        case 'div':
            result = first / second;
            break
        case 'mul':
            result = first * second;
            break;
        case 'sub':
            result = first - second;
            break;
        default:
            return res.end(`
        <html><body><h1>
            The do does not exists
        </h1></body></html>
    `);
    }

    res.end(`
        <html><body><h1>The result is ${result}</h1></body></html>
    `);
}

const server = http.createServer(requestListener);
server.listen(8080);