const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');
const fileTransformed = './data/data_transformed.txt';
const tools      = require('./tools');
const limit      = 100;    

var arrayOrigin      = tools.fileToArray(fileTransformed);


app.use(cors())

app.get('/', (req, res) => {
    const page = parseInt(req.query.page);
    if (page > 0)  {
        start = (page - 1) * limit;
        end    = start + limit;
        var array = arrayOrigin.slice(start, end);
        return res.json({numbers: array})
    }
});

app.listen('8091');