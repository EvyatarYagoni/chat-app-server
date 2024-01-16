const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const dotenv = require('dotenv');
const cors = require('cors');
const {json} = require("express");
const allRoutes = require('./src/routes/index');
const cookieParser = require('cookie-parser');
const connectDB = require('./src/config/database/connection');

dotenv.config(); // Load environment variables
app.use(cookieParser())
app.use(
  cors({
      origin: process.env.APP_CLIENT_URL,
      credentials: true, // Add this line
  })
);
app.use(json());

connectDB();

app.use('/api', allRoutes);

const port = process.env.PORT || 8080;


server.listen(port, async function() {
    console.log(`Listening on port ${port}`);
});