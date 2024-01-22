const express = require('express'),
    app = express(),
    request = require('request');

const cors = require('cors');

app.use(cors());

const host = '127.0.0.1';
const port = 7000;

app.get('/', (req, res) => {
    // let io_url = '';

    // res.send({"data":`${req.query.url_io}`});

    request(
        req.query.url_io,
        (error, response, body) => {
            if (error)
                return res
                    .status(500)
                    .send({ message: error });

            return res.send(JSON.stringify(response.body));
        }
    );
});

app.listen(port, () =>
    console.log(`Server listens http://:${port}`)
);
