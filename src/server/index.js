const express = require('express');
const app = express();
const finnhub = require('finnhub');
var cors = require('cors');
app.use(cors());
app.use(express.json());

const FINHUB_API_KEY = process.env['FINNHUB_API_KEY'] || "bv4mnbf48v6qpate9n30";

app.post('/', (req, res) => {

    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "bv4mnbf48v6qpate9n30"
    const finnhubClient = new finnhub.DefaultApi()
    finnhubClient.quote(req.body.stockTickerSymbol, (error, data, response) => {
        res.send(data)
    });

})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));