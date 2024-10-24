const http = require('http');

const server = http.createServer();

const friends = [
    {id: 1, name: 'Jhon'},
    {id: 2, name: 'Mike'},
    {id: 3, name: 'David'}
];

//friends/2
//const item =  req.url.split('/)
//['', 'endpoint', 'id/query']
server.on('request', (req, res) => {

    const item = req.url.split('/');

    if (item[1] === 'friends'){

        if (item.length === 3) {
            const index = Number(item[2]);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(friends[index]));
        } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(friends));
        }
    } else {
        res.statusCode = 404;
        res.end();
    }
    // if (req.url === '/') {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.end(JSON.stringify({
    //         id: 1,
    //         name: 'Sir Issac Newtown'
    //     }))
    // } else if (req.url === '/details') {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/html');
    //     res.write('<html>')
    //     res.write('<body>')
    //     res.write('<h1>Details</>')
    //     res.write('</body>')
    //     res.write('</html>');
    //     res.end();
    // } else {
    //     res.statusCode = 404;
    //     res.end();
    // }
})

server.listen(8000, () => {
    console.log('Server is listening on port 8000!');
})