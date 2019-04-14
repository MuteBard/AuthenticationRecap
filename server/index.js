const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express();
const router = require('./router')
const mongoose = require('mongoose')
const cors = require('cors')


// DB Setup
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });

// App Setup
// Middleware, any incoming request is going to be passed into these
// App.use() registers them as middleware
app.use(morgan('combined')) //logging framework
app.use(cors())
app.use(bodyParser.json({ type: '*/*' })) //parsed the body as if it were json no matter the type of the incoming request
router(app)

// Server Setup
const port = process.env.PORT || 3090
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port)