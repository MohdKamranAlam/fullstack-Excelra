require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const { logger, logEvents } = require('./middleware/logger');
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
const errorHandler = require('./middleware/errorHandler');
const crudData = require('./routes/crud');
const connectDB = require('./config/dbConnection');

const app = express();
mongoose.set('strictQuery', true);
const PORT = process.env.PORT || 4002;

// Connect to MongoDB
connectDB();
//mongoose.connect(process.env.MONGO_URI);

app.use(logger)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use(cookieParser())

// Define Todo Schema


app.use('/', crudData)

// C - Create


app.use(errorHandler)
// app.listen(PORT, (err) => {
//     console.log(`Todo app listening at http://localhost:${PORT}`);
//     //logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')

// });



mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})