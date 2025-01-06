const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();
const app = express();

bodyParser.json();
bodyParser.urlencoded({ extended: false });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/',(req,resp)=>{
    console.log(req.body);
    return resp.status(201);
});


app.listen(process.env.PORT, () => {
    console.log(`Server started & running on port ${process.env.PORT}`);
});
