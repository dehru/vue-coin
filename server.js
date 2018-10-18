const express = require('express')
const axious = require('axios')

const app = express();
app.set('port', process.env.PORT || 3000)
app.get('/api/coins', (req, res) => {
    axious.get('https://api.coinmarketcap.com/v2/ticker/?limit=100')
        .then((serverResponse) => {
          res.setHeader('Cache-Control', 'no-cache');
          res.json(serverResponse.data)
        })
        .catch((errorResponse) => {
            console.log('api call failed', errorResponse)
        })
})
