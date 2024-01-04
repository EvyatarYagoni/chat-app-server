const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const dotenv = require('dotenv');
const cors = require('cors');
const {json} = require("express");
const allRoutes = require('./src/routes/index');

dotenv.config(); // Load environment variables
app.use(cors());
app.use(json());

app.use('/api', allRoutes);

const port = process.env.PORT || 8080;

server.listen(port, function() {
    console.log(`Listening on port ${port}`);
});