const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3001;
app.get('/', function(req, res) {
    res.send('Hello World!');
});
server.listen(port, function() {
    console.log(`Listening on port ${port}`);
});