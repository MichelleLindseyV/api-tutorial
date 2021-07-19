const { response } = require('express');
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening on port 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/api', (req, res) => {
  console.log(req.body);
  const data = req.body;
  console.log(data.lat);
  console.log(data.lon);
  res.json({
    status: 'success',
    latitude: data.lat,
    longitude: data.lon
  });
});