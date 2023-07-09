const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
app.use(cors());

const port = process.env.PORT || 8080;
app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/health', function(req, res) {
    res.send('OK');
});

server.listen(port, function() {
    console.log(`Listening on port ${port}`);
});