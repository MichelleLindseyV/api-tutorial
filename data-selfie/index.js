const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening on port 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();
database.insert({ name: 'Michelle', status: 'happy'});

app.post('/api', (req, res) => {
  const data = req.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;

  database.insert(data);
  res.json({
    status: 'success',
    timestamp: timestamp, 
    latitude: data.lat,
    longitude: data.lon
  });
});