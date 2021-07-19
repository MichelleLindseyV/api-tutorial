const { response } = require('express');
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening on port 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/api', (req, res) => {
  console.log(req.body);
  response.json({
    status: 'success',
    latitude: lat,
    longitude: lon
  });
});