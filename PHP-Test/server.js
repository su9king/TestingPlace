const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // URL이 '/'인 경우 index.html 파일 제공
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
    }
    // URL이 '/index.js'인 경우 index.js 파일 제공
    else if (req.url === '/index.js') {
        fs.readFile('./index.js', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.js');
            }

            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.end(data);
        });
    }

    
});
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = process.env.PORT || 3002;
server.listen(PORT , () => console.log(`server running on port ${PORT}`));