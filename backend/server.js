require('typescript-sdk/dist/integrations/express/register') ;
//process.env.KEPLOY_MODE = "test"
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');


app.use(cors());
app.use(express.json());
//function test2(){
const uri = "mongodb://localhost:27017/test?readPreference=primary&directConnection=true&ssl=false";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

//}

//test2()

//exports.test2 = test2;
